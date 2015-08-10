package com.magus.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckedAction extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public CheckedAction() {
		
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Tree---------------请求到来!");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		// 获取单击的节点id
		String node = request.getParameter("node");
		System.out.println("获取的节点ID: " + node);
		String json = "";
		
		if("0".equals(node)) {	// 全部分组
			json += "[{id:'1', checked: false, text: '我的好友'}, {id:'2', checked: false, text: '我的同学'},{id:'3', checked: false, text: '陌生人', leaf: true}]";
		} else if("1".equals(node)) {
			json += "[{id:'11', checked: false, text: '张三', leaf: true}, {id:'12', checked: false, text: '李四', leaf: true}, {id:'13', checked: false, text: '王五', leaf: true}]";
		} else if("2".equals(node)) {
			json += "[{id:'21', checked: false, text: '刘备', leaf: true}, {id:'22', checked: false, text: '曹操', leaf: true}, {id:'23', checked: false, text: '孙尚香', leaf: true}]";
		}
		
		System.out.println("返回数据: " + json);
		response.getWriter().write(json);
		System.out.println("Tree---------------请求结束!");
	}

}
