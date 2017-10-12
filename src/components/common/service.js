/*
 接口API
优蓝网测试环境api地址：http://10.12.1.44:8080/api/
 * */

var BaseURL ="http://10.12.1.44:8080/api/";
var Youlanw_APIS = {
	//首页
	home_carousel  : BaseURL + "v5/adv/homeBannerByBranchId?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&branch_id=1",
	home_list      : BaseURL + "v5/adv/homePageByBranchId?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&branch_id=",
	//企业搜索
	comp_search    : BaseURL + "v5/enterprise/findByKeyword?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=&baidu_city_id=289&keyword=",
	//生活
	life           : BaseURL + "v5/adv/life/findTogether?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&type=1&page=1&limit=10",
	//说说
	chat_list      : BaseURL + "v6/article/ramble?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&uid=56741ada71d03f4122b9f5a6&page=1&limit=",
	chat_list_1    : BaseURL + "v6/article/ramble?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&uid=56741ada71d03f4122b9f5a6",
	//说说详情
	chat_detail    : BaseURL + "v6/article/detail?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&id=",
	//点赞
	praise         : BaseURL + "v6/article/ramble?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&article_id=",
	//添加评论
	add_comment     : BaseURL + "v6/article/postComments?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&id=",
	//我的
	mine           : BaseURL + "v1/account/profile?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=841f2ef3d1504746961b738f23dd8933&uid=56741ada71d03f4122b9f5a6&limit=10&limit=&province_id=&city_id=&area_id=&address=&sign=",
	//获取验证码
	code           : BaseURL + "v1/account/register/valimobile",
	//登录
	login          : BaseURL + "v1/oauth/authorize",
}

export default Youlanw_APIS;
