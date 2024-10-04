import * as jspb from 'google-protobuf'



export class Job extends jspb.Message {
  getJobid(): string;
  setJobid(value: string): Job;

  getJobname(): string;
  setJobname(value: string): Job;

  getJobstatus(): JobStatus;
  setJobstatus(value: JobStatus): Job;

  getCreatedat(): string;
  setCreatedat(value: string): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobid: string,
    jobname: string,
    jobstatus: JobStatus,
    createdat: string,
  }
}

export class JobList extends jspb.Message {
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): JobList;
  clearJobsList(): JobList;
  addJobs(value?: Job, index?: number): Job;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobList.AsObject;
  static toObject(includeInstance: boolean, msg: JobList): JobList.AsObject;
  static serializeBinaryToWriter(message: JobList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobList;
  static deserializeBinaryFromReader(message: JobList, reader: jspb.BinaryReader): JobList;
}

export namespace JobList {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
  }
}

export class JobId extends jspb.Message {
  getId(): string;
  setId(value: string): JobId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobId.AsObject;
  static toObject(includeInstance: boolean, msg: JobId): JobId.AsObject;
  static serializeBinaryToWriter(message: JobId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobId;
  static deserializeBinaryFromReader(message: JobId, reader: jspb.BinaryReader): JobId;
}

export namespace JobId {
  export type AsObject = {
    id: string,
  }
}

export class JobDetails extends jspb.Message {
  getJobid(): string;
  setJobid(value: string): JobDetails;

  getJobname(): string;
  setJobname(value: string): JobDetails;

  getJobstatus(): JobStatus;
  setJobstatus(value: JobStatus): JobDetails;

  getCreatedat(): string;
  setCreatedat(value: string): JobDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobDetails.AsObject;
  static toObject(includeInstance: boolean, msg: JobDetails): JobDetails.AsObject;
  static serializeBinaryToWriter(message: JobDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobDetails;
  static deserializeBinaryFromReader(message: JobDetails, reader: jspb.BinaryReader): JobDetails;
}

export namespace JobDetails {
  export type AsObject = {
    jobid: string,
    jobname: string,
    jobstatus: JobStatus,
    createdat: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export enum JobStatus { 
  SUBMITTED = 0,
  RUNNING = 1,
  COMPLETED = 2,
}
