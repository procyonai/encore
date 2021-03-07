import BaseClient from "./base";
import { APIMeta } from "~c/api/api";

export default class Client {
  base: BaseClient;

  constructor() {
    this.base = new BaseClient()
  }
}

export interface ProcessStart {
  appID: string;
  pid: string
  meta: APIMeta;
  port: number;
}

export interface ProcessStop {
  appID: string;
  pid: string
}

export interface ProcessOutput {
  appID: string;
  pid: string
  output: string;
}
