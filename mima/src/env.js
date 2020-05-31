let baseURL; // 当用cors和jsonp这样的方式做跨域的时候的配置
switch (process.env.NODE_ENV) { // nodeJS里面有一个进程叫process，process可以获取nodeJS进程里面的环境变量
  case 'development': // 开发
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test': // 测试
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev': // 预发布环境，如果要加这样的环境配置，要新建一个'.env'为前缀的文件'.env.prev'后面的'.prev'要和case后面的值匹配，该文件内的内容是：NODE_ENV='prev'即可
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  case 'prod': // 线上
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default: // 默认输出线上环境
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
  baseURL
}