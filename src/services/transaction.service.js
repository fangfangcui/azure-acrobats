
import http from '../http-common';

const API_URL = 'http://localhost:8080/api/';

class TransactionService {

  getAllTransactions(){
    return http.get(API_URL + 'transactions');
  }

  getSumHouseholdProducts(){
    return http.get(API_URL + 'household-products');
  }

}

export default new TransactionService();