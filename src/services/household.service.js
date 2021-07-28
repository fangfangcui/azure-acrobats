
import http from '../http-common';

const API_URL = 'http://localhost:8080/api/';

class HouseholdService {

  getAllHouseholds(){
    return http.get(API_URL + 'households');
  }
}

export default new HouseholdService();