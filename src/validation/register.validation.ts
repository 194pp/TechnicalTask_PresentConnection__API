import bcrypt from "bcrypt";


export const validateRegistrationData = (data: {
  username: string, password: string, repeatPassword: string
}) => {
  const {username, password, repeatPassword} = data;
  const result: {success: boolean, info: object[] } = {
    success: false,
    info: [],
  }

  if (!!username)
    result.info.push({username: "Enter username."});
  if (!!password)
    result.info.push({password: "Enter password."});
  if (!!repeatPassword)
    result.info.push({repeatPassword: "Enter repeatPassword."});

  if (!result.success)
    return result;

  if (username.length < 5)
    result.info.push({username: "Username too short, must be at least 5 characters."});
  if (username.length > 20)
    result.info.push({username: "Username too long, must be less or equal to 20 characters."});

  if (password.length < 5)
    result.info.push({password: "Password too short, must be at least 5 characters."});
  if (password.length > 20)
    result.info.push({password: "Password too long, must be less or equal to 20 characters."});

  if (password !== repeatPassword)
    result.info.push({repeatPassword: "Password and repeatPassword has to match"});

  if (result.info.length === 0)
    return result;
  else {
    result.success = true;
    result.info = [{data: data}];
    return result;
  }
}
