const pro = false;
const rootDev = 'http://localhost:8090/api';
const rootPro = 'http://localhost:8090/api';

export const apiTecnicos    = { apiRoot: (pro ? rootPro : rootDev) + '/tecnicos' } 

export const apiVehiculos   = { apiRoot: (pro ? rootPro : rootDev) + '/vehiculos' } 
