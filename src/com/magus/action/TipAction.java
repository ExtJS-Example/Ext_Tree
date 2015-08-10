package com.magus.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TipAction extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public TipAction() {
		
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Tip---------------请求到来!");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		// 获取单击的节点id
		String node = request.getParameter("node");
		System.out.println("获取的节点ID: " + node);
		String json = "";
		
		if("0".equals(node)) {	// 全部分组
			json += "[{id:'1', text: '我的好友'}, {id:'2', text: '我的同学'}, {id:'3', text: '陌生人', leaf: true}]";
		} else if("1".equals(node)) {
			json += "[{id:'11', text: '张三', leaf: true, qtip: '路人甲'}, {id:'12', text: '李四', leaf: true, qtip: '炮灰乙'}, {id:'13', text: '王五', leaf: true, qtip: '士兵丁'}]";
		} else if("2".equals(node)) {
			json += "[{id:'21', text: '刘备', leaf: true, qtip: '蜀国霸主'}, {id:'22', text: '曹操', leaf: true, qtip: '一家三杰'}, {id:'23', text: '孙尚香', leaf: true, qtip: '哥哥威武霸气'}]";
		}
		
		response.getWriter().write(json);
		System.out.println("Tip---------------请求结束!");
	}

}
