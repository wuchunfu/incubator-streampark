/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosResponse } from 'axios';
import { defHttp } from '/@/utils/http/axios';

enum BUILD_API {
  BUILD = '/flink/pipe/build',
  DETAIL = '/flink/pipe/detail',
}

export function fetchBuild(data: { appId: string; forceBuild: boolean; }): Promise<AxiosResponse<any>> {
  return defHttp.post({ url: BUILD_API.BUILD, data }, { isReturnNativeResponse: true });
}
/**
 * Get build details
 * @returns
 * @param data
 */
export function fetchBuildDetail(data: { appId: string }): Promise<{ pipeline: any; docker: any }> {
  return defHttp.post({ url: BUILD_API.DETAIL, data });
}
