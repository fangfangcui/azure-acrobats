
import http from '../http-common';

const API_URL = 'http://localhost:8080/api/';

class TransactionService {

  getAllTransactions(){
    return http.get(API_URL + 'transactions');
  }

}

export default new TransactionService();