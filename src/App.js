import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/antd/dist/antd.css";
import { Layout } from "antd";

import AppSidebar from "./layout/sidebar";
import AppHeader from "./layout/header";
import AppFooter from "./layout/footer";
import Routes from "./routes/routes";

const { Content } = Layout;

function App() {
	return (
		<Layout>
			<AppSidebar></AppSidebar>
			<Layout>
				<AppHeader></AppHeader>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: "#fff",
						minHeight: 280
					}}
				>
					<Routes />
				</Content>
				<AppFooter></AppFooter>
			</Layout>
		</Layout>
	);
}

export default App;
