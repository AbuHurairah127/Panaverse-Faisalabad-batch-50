"use client"
import { useState } from 'react';
import { BiCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddChart } from "react-icons/md";
import { ExpenseType } from '@/types/commonTypes';
import ExpenseModal from '../expenseModal/expenseModal';


const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expense, setExpense] = useState<ExpenseType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  });
  const [total, setTotal] = useState<number>(0)

  const onAddExpense = (expense: ExpenseType) => {
    setExpenses([...expenses, expense]);
    setTotal(total + expense.amount);
  }
  const onClose = () => {
    setIsOpen(false);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onUpdateExpense = (expenseRecord: ExpenseType) => {
    setExpenses(expenses.map((e) => (e.id === expenseRecord.id ? expenseRecord : e)));
    setTotal(total - expense.amount + expenseRecord.amount);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }


  const onDeleteHandler = (expense: ExpenseType) => {
     
    const filterdExpenses:ExpenseType[] = expenses.filter((e) => e.id !== expense.id)
    setExpenses(filterdExpenses);
    setTotal(total - expense.amount);
  }

  const onEditHandler = (expense: ExpenseType) => {
    setExpense(expense)
    setIsOpen(true);
  }
  return (
    <div className="m-8">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
        <button className="flex justify-center items-center mb-2 bg-green-500 rounded p-1" onClick={() => setIsOpen(true)}><MdAddChart />
          Add Expense</button>
      </div>

      <ExpenseModal expense={expense} isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense} onUpdateExpense={onUpdateExpense} />

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.length > 0 ?
              expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50 text-center">
                  <td className="py-2 px-4 border-b">{expense.id}</td>
                  <td className="py-2 px-4 border-b">PKR{expense.amount.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{expense.category}</td>
                  <td className="py-2 px-4 border-b">{expense.note}</td>
                  <td className="py-2 px-4 border-b">{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="flex justify-center py-2 px-4 border-b">
                    <button onClick={() => onEditHandler(expense)} className="flex mr-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> <BiCommentEdit className="mt-1" />Edit</button>
                    <button onClick={() => onDeleteHandler(expense)} className="flex ml-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"><MdDeleteForever className="mt-1" /> Delete</button>
                  </td>
                </tr>
              ))

              : <tr>
                <td colSpan={6} className="text-center">No Expense Found!</td>
              </tr>

          }
        </tbody>
      </table>
      <div className="flex justify-end">
        <p className="text-2xl font-semibold mb-4">Total: PKR{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseList;
