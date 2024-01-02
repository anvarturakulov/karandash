import axios from 'axios';
import { showMessage } from '../common/showMessage';

export const getDocumentById = (
  id: string | undefined,
  setMainData: Function | undefined,
  token: string | undefined
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  if (id) {
    const uri = process.env.NEXT_PUBLIC_DOMAIN + '/api/document/' + id;
    axios.get(uri, config)
      .then(function (response) {
        setMainData && setMainData('currentDocument', response.data);
        // table items loading ...
        console.log(response.data)
        setMainData && setMainData('showDocumentWindow', true);
      })
      .catch(function (error) {
        if (setMainData) {
          showMessage(error.message, 'error', setMainData)
        }
      });
  }
}