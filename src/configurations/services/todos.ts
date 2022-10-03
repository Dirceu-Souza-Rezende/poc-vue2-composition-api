import axios from "axios";
import { notification } from "@farm-investimentos/front-mfe-libs/helpers/notify";
import axiosWrapper from "@farm-investimentos/front-mfe-libs/helpers/axiosWrapper";

const baseURL = "localhost:3000";

const client = axiosWrapper(axios, notification, baseURL);

export default client;
