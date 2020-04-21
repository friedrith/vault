export const getSecrets = state =>
  state.secrets.order
    .map(id => state.secrets.byId[id])
    .filter(secret => !secret.isDeleting)

export const getRemovingSecret = state =>
  Object.keys(state.secrets.byId).find(id => state.secrets.byId[id].isDeleting)
