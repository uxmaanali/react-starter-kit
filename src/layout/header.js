import React from "react";
import { Layout, Menu, Icon, Dropdown, Button } from "antd";
import { connect } from "react-redux";
import { collapseMenu } from "../actions/sidebarMenu";

const { Header } = Layout;
function AppHeader({ isCollapsed, collapseMenu }) {
	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Icon type="user" />
				1st menu item
			</Menu.Item>
			<Menu.Item key="2">
				<Icon type="user" />
				2nd menu item
			</Menu.Item>
			<Menu.Item key="3">
				<Icon type="user" />
				3rd item
			</Menu.Item>
		</Menu>
	);
	const toggleMenu = () => {
		let c = isCollapsed === true ? false : true;
		collapseMenu(c);
	};
	return (
		<Header style={{ background: "#fff", padding: 0 }}>
			<ul className="nav nav-pills ml-2 mr-2">
				<li className="nav-item">
					<Icon
						className="trigger"
						type={isCollapsed ? "menu-unfold" : "menu-fold"}
						onClick={() => toggleMenu()}
					/>
					{isCollapsed ? "true" : "false"}
				</li>

				<li className="nav-item dropdown ml-auto">
					<Dropdown overlay={menu}>
						<Button>
							Button <Icon type="down" />
						</Button>
					</Dropdown>
				</li>
			</ul>
		</Header>
	);
}

const mapStateToProps = (state) => ({
	isCollapsed: state.sidebarMenu.isCollapsed
});

export default connect(mapStateToProps, { collapseMenu })(AppHeader);
