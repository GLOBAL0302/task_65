import { PAGES } from '../../constants';
import React, { useState } from 'react';
import { IPageEdit, IPageMutation } from '../../types';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const initialState: IPageEdit = {
  title: '',
  content: '',
  page:"Home"
};

const PageForm = () => {
  const navigate = useNavigate();
  const [pageMutation, setPageMutation] = useState<IPageEdit>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPageMutation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let change = {
      title: pageMutation.title,
      content :pageMutation.content
    }
    event.preventDefault();
    axiosApi.put(`/page/${pageMutation.page.toLowerCase()}.json`, change )
  };

  return (
    <div className='p-4 bg-light'>
      <h4 className='fs-2'>Edit Page:</h4>
      <hr/>
      <form onSubmit={onFormSubmit}>
        <div className='form-group mb-4'>
          <label htmlFor='page'></label>
          <select
            required
            onChange={onChange}
            name='page'
            id='page'
            className='form-select'>
            {PAGES.map(page => (
              <option
                key={page.id}
                value={page.id}>{page.title}</option>
            ))}
          </select>
        </div>

        <div className='input-group mb-3'>
          <label htmlFor='title'>
            <span className='input-group-text  px-5 fw-bold'
                  id='inputGroup-sizing-default'>Title
            </span>
          </label>
          <input
            required
            onChange={onChange}
            name="title"
            id="title"
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default' />
        </div>

        <div className='input-group mb-5'>
          <label htmlFor='content'>
            <span className='input-group-text  px-5 fw-bold'
                  id='inputGroup-sizing-default'>Content
            </span>
          </label>
          <input
            required
            onChange={onChange}
            name="content"
            id="content"
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default' />
        </div>
        <button className="btn btn-primary">
          Save Edit
        </button>
      </form>
    </div>
  );
};

export default PageForm;