import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import axiosApi from '../../axiosApi';
import { IPageMutation } from '../../types';

const ShowPage = () => {
  const [selectedPage, setSelectedPage]= useState<IPageMutation>({
    content:"",
    title:""
  })

  const {id} = useParams()

  const fetchPage = useCallback(async ()=>{

    const {data:page} = await axiosApi.get<IPageMutation | null>(`/page/${id}.json`);
    setSelectedPage(page);

  },[id])

  useEffect(() => {
    void fetchPage()
  }, [fetchPage]);
  return (
    <div className="p-5 bg-light">
      <h2>{selectedPage.title}</h2>
      <p>{selectedPage.content}</p>
    </div>
  );
};

export default ShowPage;