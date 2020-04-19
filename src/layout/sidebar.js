import React from "react";
import { connect } from "react-redux";
import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;

function AppSidebar({ isCollapsed }) {
	return (
		<div>
			<Sider
				trigger={null}
				collapsible
				collapsed={isCollapsed}
				style={{
					height: "100vh"
				}}
			>
				<div className="logo">
					<img
						src="/images/logo.png"
						alt="Logo"
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1">
						<Icon type="user" />
						<span>nav 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="video-camera" />
						<span>nav 2</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="upload" />
						<span>nav 3</span>
					</Menu.Item>
					<SubMenu
						key="sub1"
						title={
							<span>
								<Icon type="mail" />
								<span>Navigation One</span>
							</span>
						}
					>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		</div>
	);
}
const mapStateToProps = (state) => ({
	isCollapsed: state.sidebarMenu.isCollapsed
});
export default connect(mapStateToProps)(AppSidebar);
