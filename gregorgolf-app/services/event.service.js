import { fetchWrapper } from 'helpers';

const baseUrl = `${process.env.NEXT_PUBLIC_API_URI}/events`;

export const eventService = {
    addEvent,
    getById,
    getByDate,
    getInRange,
    getAll,
    getByMember,
    isBookedInOtherBay,
    update,
    delete: _delete
};

async function getAll() {
    return await fetchWrapper.get(`${baseUrl}`);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/id/${id}`);
}

async function getByMember(member) {
    return await fetchWrapper.get(`${baseUrl}/member/${member}`);
}

async function addEvent(event) {
    return await fetchWrapper.post(`${baseUrl}/add`, event);
}

async function getByDate(startDate, endDate) { 
    return await fetchWrapper.get(`${baseUrl}/${startDate}/${endDate}`);
}

async function getInRange(startDate, endDate, bay) {
    return await fetchWrapper.get(`${baseUrl}/range/${startDate}/${endDate}/${bay}`);
}

async function isBookedInOtherBay(userId, bay, time){
    const { isFound } = await fetchWrapper.get(`${baseUrl}/booked?user=${userId}&bay=${bay}&time=${time}`);
    return isFound;
}

async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/id/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id, userId, adminDelete) {
    await fetchWrapper.delete(`${baseUrl}/id/${id}/${userId}/${adminDelete}`);
}