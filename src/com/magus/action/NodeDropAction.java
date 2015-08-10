package com.magus.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NodeDropAction extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	public NodeDropAction() {
		
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("NodeDrop---------------请求到来!");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		String dropNode = request.getParameter("dropNode");
		String target = request.getParameter("target");
		String point = request.getParameter("point");
		
		String msg = "dropNode: " + dropNode + ", target: " + target + ", point: " + point;
		System.out.println("接收到的数据： " +msg);
		String json = "{success: true, msg: "+msg+"}";
		response.getWriter().write(json);
		System.out.println("NodeDrop---------------请求结束!");
	}

}
