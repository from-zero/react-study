import pathToRegexp from 'path-to-regexp';
const cache = {};
const cacheLimit = 10000;
let cacheCount = 1;

//转换path为正则和关键字数组
function compilePath(path, options) {
    /**options{
     * end即为exact,
     * sensitive:大小写敏感
     * strict:为true的时候，结尾有/则匹配带/的。可用于强制location.pathname没有尾随斜杠，但要执行此操作，strict和exact都必须为true
    }**/
    console.log(options)
    const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
    const pathCache = cache[cacheKey] || (cache[cacheKey] = {});
    if (pathCache[path]) return pathCache[path];
    const keys = [];
    const regexp = pathToRegexp(path, keys, options);
    const result = { regexp, keys };

    //缓存10000条之后的不再缓存
    if (cacheCount < cacheLimit) {
        pathCache[path] = result;
        cacheCount++;
    }
    return result;
}

/**
* 匹配pathname和path.
*/
function matchPath(pathname, options = {}) {
    if (typeof options === "string") options = { path: options };
    const { path, exact = false, strict = false, sensitive = false } = options;
    const paths = [].concat(path);
    // 转换path为match
    return paths.reduce((matched, path) => {
        if (!path) return null;
        if (matched) return matched;
        // 转换path为正则和占位符数组
        const { regexp, keys } = compilePath(path, {
            end: exact,
            strict,
            sensitive
        });
        // 获得正则匹配数组
        const match = regexp.exec(pathname);
        if (!match) return null;
        // 结构出匹配url和值数组
        const [url, ...values] = match;
        const isExact = pathname === url;
        if (exact && !isExact) return null;
        return {
            path, // 待匹配path
            url: path === "/" && url === "" ? "/" : url, // url匹配部分
            isExact, // 精确匹配
            params: keys.reduce((memo, key, index) => { // 参数
                memo[key.name] = values[index];
                return memo;
            }, {})
        };
    }, null);
}
export default matchPath;
