/*
 * @Describe: 测试首页
 */

import "./index.less";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";

const Home = props => {
	const { globalStore, homeStore } = props;

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		dispatch({
			type: "global/updateState",
			payload: {
				count: 2
			}
		});
		dispatch({
			type: "home/updateState",
			payload: {
				homeCount: 2
			}
		});
	};

	return (
		<div className="g-home">
			<div className="wrap">
				<img className="pic" src={require("./img/mypic.jpeg")} alt="" />
				<label className="title">DEMO</label>
				<div className="txt">欢迎参观我的网站</div>
				globalStore中取过来的数据：{globalStore.count}<br />
				homeStore中取过来的数据：{homeStore.homeCount}<br />
				<Button>测试antd组件</Button>
			</div>
			<div className="copyright">Copyright @2019 Bruceliu出品</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	globalStore: state.global,
	homeStore: state.home
});

export default connect(mapStateToProps)(Home);

