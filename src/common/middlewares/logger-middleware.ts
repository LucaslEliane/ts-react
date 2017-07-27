const logger = (store: any) => (dispatch: any) => (action: any) => {
  console.log(`dispatching`, action);
  let result = dispatch(action);
  console.log(`next state`, store.getState());
  return result;
}

export default logger;