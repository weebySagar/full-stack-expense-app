import React, { useState } from 'react'
import { addExpense } from '../services/expense-api';
import toast from 'react-hot-toast';

const AddExpenseForm = () => {
    const [expenseData,setExpenseData] = useState({
        date :'',
        amount:'',
        description:'',
        category:'',
        paymentMethod:''
    })


    const [errors, setErrors] = useState({
        date :'',
        amount:'',
        description:'',
        category:'',
        paymentMethod:''
      });
    const handeInputChange=(e)=>{
        const {name,value} = e.target;
        setExpenseData({
            ...expenseData,
            [name]:value
        })
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        // Date validation
        
        if(expenseData.date.trim()=== ''){
            newErrors.date = 'Date is required';
            valid=false;
        } else {
          newErrors.date = '';
        }

         // Amount validation
         if (expenseData.amount.trim() === '') {
            newErrors.amount = 'Amount is required';
            valid = false;
          } else {
            newErrors.amount = '';
          }

          // Description validation
         if (expenseData.description.trim() === '') {
            newErrors.description = 'Description is required';
            valid = false;
          } else {
            newErrors.description = '';
          }

          // Category validation
         if (expenseData.category.trim() === '') {
            newErrors.category = 'Category is required';
            valid = false;
          } else {
            newErrors.category = '';
          }

           // paymentMethod validation
         if (expenseData.paymentMethod.trim() === '') {
            newErrors.paymentMethod = 'Payment method is required';
            valid = false;
          } else {
            newErrors.paymentMethod = '';
          }
    
        setErrors(newErrors);
        return valid;
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validateForm()){
          const updatedDate = expenseData.date.split('T')[0];
            const data =addExpense({...expenseData,date:updatedDate});
          
          toast.promise(data,{
            loading:'Hang on...',
            success:()=>{
            setExpenseData({
              date:'',
              amount:'',
              description:'',
              category:'',
              paymentMethod:''
            });
            
            return `expense added successfully`
          },
            error:(err)=>err.toString()
          })
        
        }
    }
    return (
        <div className="row">
            <div className="col-4">
                <p className='pt-4'>Add all of yours expense information in this form </p>
            </div>
            <div className="col-8">

                <form className='p-4' noValidate onSubmit={handleSubmit}>
                    <div className="mb-3 col-12">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" name='date' aria-describedby="date" onChange={handeInputChange} value={expenseData.date} />
                        {errors.date && <p className='text-danger'>{errors.date}</p>}
                    </div>


                    <div className="mb-3 col-12">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="amount" aria-describedby="amount" name='amount' onChange={handeInputChange} value={expenseData.amount} />
                        {errors.amount && <p className='text-danger'>{errors.amount}</p>}

                    </div>

                    
                    <div className="mb-3 col-12">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select className="form-select" aria-label="category" name='category' onChange={handeInputChange} value={expenseData.category}>
                            <option value=''>Select Category</option>
                            <option value="groceries">Groceries</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="clothing">Clothing</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="travel">Travel</option>
                            <option value="Miscellaneous">Miscellaneous</option>

                        </select>
                        {errors.category && <p className='text-danger'>{errors.category}</p>}

                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="payment" className="form-label">Payment Method</label>
                        <select className="form-select" aria-label="payment" id='payment' name='paymentMethod' onChange={handeInputChange} value={expenseData.paymentMethod}>
                            <option value=''>Select Payment Method</option>
                            <option value="cash">Cash</option>
                            <option value="debitCard">Debit Card</option>
                            <option value="credit card">Credit Card</option>
                            <option value="net banking">Net Banking</option>
                            <option value="online (upi,wallet)">Online (UPI, Wallet)</option>
                        </select>
                        {errors.paymentMethod && <p className='text-danger'>{errors.paymentMethod}</p>}
                    </div>

                    <div className="mb-3 col-12">
                        {/* <div className="form-floating"> */}
                            <label htmlFor="floatingTextarea2" className='form-label'>Description</label>
                            <textarea className="form-control"  id="floatingTextarea2" style={{ height: '100px' }} name='description' onChange={handeInputChange} value={expenseData.description}></textarea>

                        {/* </div> */}
                        {errors.description && <p className='text-danger'>{errors.description}</p>}

                    </div>

                    <div className="col-4">
                        <button type="submit" className='btn-primary'>Add Expense</button>
                    </div>
                </form>
            </div>





        </div>
    )
}

export default AddExpenseForm