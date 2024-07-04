import { useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

import axiosApi from '../../axiosApi';

const ShowPage = () => {
  const {id} = useParams()

  const fetchPage = useCallback(async ()=>{
    const {data:page} = await axiosApi.get("/page.json")

  },[id])

  useEffect(() => {
    void fetchPage()
  }, []);
  return (
    <div className="p-5 bg-light">
      <h2> hello {id}</h2>
    </div>
  );
};

export default ShowPage;