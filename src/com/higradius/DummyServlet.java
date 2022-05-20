package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class dummyServlet
 */
@WebServlet("/DummyServlet")
public class DummyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static final String fetch_query = "select name_customer,cust_number,invoice_id,total_open_amount,due_in_date,clear_date,notes from invoice_records LIMIT ? , ?";
	private static final String search_query = "SELECT name_customer,cust_number,invoice_id,total_open_amount,due_in_date,clear_date,notes FROM invoice_records WHERE invoice_id = ?";   
	private static final String delete_query = "delete from invoice_records where invoice_id = ?";
	private static final String add_query    = "INSERT INTO invoice_records" + "  (name_customer,cust_number,invoice_id,total_open_amount,due_in_date,clear_date,notes) VALUES " + " (?, ?, ?, ?, ?, ?, ?);";
	private static final String edit_query   = "update invoice_records set total_open_amount = ?,notes= ? where invoice_id = ?;";
	
	/**
     * @see HttpServlet#HttpServlet()
     */
//    public DummyServlet() {
//        super();
//    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getServletPath();
            switch (action) {
                case "/add":
                	addData(request,response);
                    break;
                case "/edit":
                    editData(request, response);
                    break;
                case "/delete":
                    deleteData(request, response);
                    break;
                case "/search":
                    searchData(request, response);
                    break;
                default:
                	fetchData(request,response);
                    break;
            }
	}
	
	
//	 Fetch data
	
	
	private void fetchData(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		List<HashMap<String,Object>> result = new ArrayList<HashMap<String,Object>>();
		try {
			Integer start = Integer.parseInt(request.getParameter("start"));
			Integer limit = Integer.parseInt(request.getParameter("limit"));
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement ps = con.prepareStatement(fetch_query);
			ps.setInt(1, start);
			ps.setInt(2, limit);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				HashMap<String,Object> row = new HashMap<String,Object>();
				row.put("Customer_Name", rs.getString(1));
				row.put("Customer_no", rs.getString(2));
				row.put("Invoice_id", rs.getString(3));
				row.put("Invoice_Amount", rs.getString(4));
				row.put("Due_Date", rs.getString(5));
				row.put("Predicted_Payment_Date", rs.getString(6));
				row.put("Notes", rs.getString(7));
				result.add(row);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();

		response.getWriter().print(gson.toJson(result));
	}
	
// add data
	
	private void addData(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		try {
			String name = request.getParameter("name");
			String num = request.getParameter("num");
			String id = request.getParameter("id");
			String amt = request.getParameter("amt");
			String due_date = request.getParameter("due_date");
			String pay_date = request.getParameter("pay_date");
			String notes = request.getParameter("notes");
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement ps = con.prepareStatement(add_query);
			ps.setString(1, name);
			ps.setString(2, num);
			ps.setString(3, id);
			ps.setString(4, amt);
			ps.setString(5, due_date);
			ps.setString(6, pay_date);
			ps.setString(7, notes);
			ps.executeUpdate();
			
		}catch(Exception e) {
		e.printStackTrace();
	}
	}
	
// edit data
	
	private void editData(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		try {
			String amt = request.getParameter("amt");
			String notes = request.getParameter("notes");
			String id = request.getParameter("id");
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement ps = con.prepareStatement(edit_query);
			ps.setString(1, amt);
			ps.setString(2, notes);
			ps.setString(3, id);
			ps.executeUpdate();
			
		}catch(Exception e) {
		e.printStackTrace();
	}
	}
	
// delete data
	
	private void deleteData(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		try {
			String id = request.getParameter("id");
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement ps = con.prepareStatement(delete_query);
			ps.setString(1, id);
			ps.executeUpdate();
			
		}catch(Exception e) {
		e.printStackTrace();
	}
	}
	
	
//  Search data
	
	private void searchData(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		List<HashMap<String,Object>> result = new ArrayList<HashMap<String,Object>>();
		try {
			String id = request.getParameter("id");
			Connection con = DatabaseConnection.initializeDatabase();
			PreparedStatement ps = con.prepareStatement(search_query);
			ps.setString(1, id);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				HashMap<String,Object> row = new HashMap<String,Object>();
				row.put("Customer_Name", rs.getString(1));
				row.put("Customer_no", rs.getString(2));
				row.put("Invoice_id", rs.getString(3));
				row.put("Invoice_Amount", rs.getString(4));
				row.put("Due_Date", rs.getString(5));
				row.put("Predicted_Payment_Date", rs.getString(6));
				row.put("Notes", rs.getString(7));
				result.add(row);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();

		response.getWriter().print(gson.toJson(result));
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
