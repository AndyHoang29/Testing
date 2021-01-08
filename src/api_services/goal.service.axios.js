import API from "../_backend/api";

export const goalsAxiosService = {
  addGoal,
  getAllGoals,
  getGoalsByUserId,
  getGoalById,
  removeGoal,
  updateGoal,
};

function addGoal(goal) {
  return API.post(`/goals`, JSON.stringify(goal));
}
function getAllGoals() {
  return API.get(`/goals`);
}
function getGoalById(id) {
  return API.get(`/goals/${id}`, id);
}
function getGoalsByUserId(userId) {
  return API.get(`/goals/users/${userId}`,  { data: { userId } });
}
function removeGoal(id) {
  return API.delete(`/goals/${id}`, {data: { id } });
}
function updateGoal(updateGoal) {
  return API.put(`/goals/${updateGoal.id}`,  JSON.stringify(updateGoal));
}
