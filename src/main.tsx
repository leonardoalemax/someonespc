import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";

createRoot(document.getElementById("app")!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/someonespc' element={<App />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
