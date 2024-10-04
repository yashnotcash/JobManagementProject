// source: job_management.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.jobmanagement.Empty', null, global);
goog.exportSymbol('proto.jobmanagement.Job', null, global);
goog.exportSymbol('proto.jobmanagement.JobDetails', null, global);
goog.exportSymbol('proto.jobmanagement.JobId', null, global);
goog.exportSymbol('proto.jobmanagement.JobList', null, global);
goog.exportSymbol('proto.jobmanagement.JobStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jobmanagement.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jobmanagement.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobmanagement.Job.displayName = 'proto.jobmanagement.Job';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jobmanagement.JobList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jobmanagement.JobList.repeatedFields_, null);
};
goog.inherits(proto.jobmanagement.JobList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobmanagement.JobList.displayName = 'proto.jobmanagement.JobList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jobmanagement.JobId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jobmanagement.JobId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobmanagement.JobId.displayName = 'proto.jobmanagement.JobId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jobmanagement.JobDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jobmanagement.JobDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobmanagement.JobDetails.displayName = 'proto.jobmanagement.JobDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jobmanagement.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jobmanagement.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobmanagement.Empty.displayName = 'proto.jobmanagement.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jobmanagement.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.jobmanagement.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jobmanagement.Job} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.Job.toObject = function(includeInstance, msg) {
  var f, obj = {
jobid: jspb.Message.getFieldWithDefault(msg, 1, ""),
jobname: jspb.Message.getFieldWithDefault(msg, 2, ""),
jobstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
createdat: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobmanagement.Job}
 */
proto.jobmanagement.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobmanagement.Job;
  return proto.jobmanagement.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobmanagement.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobmanagement.Job}
 */
proto.jobmanagement.Job.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobname(value);
      break;
    case 3:
      var value = /** @type {!proto.jobmanagement.JobStatus} */ (reader.readEnum());
      msg.setJobstatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jobmanagement.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jobmanagement.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobmanagement.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJobstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string jobId = 1;
 * @return {string}
 */
proto.jobmanagement.Job.prototype.getJobid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.Job} returns this
 */
proto.jobmanagement.Job.prototype.setJobid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string jobName = 2;
 * @return {string}
 */
proto.jobmanagement.Job.prototype.getJobname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.Job} returns this
 */
proto.jobmanagement.Job.prototype.setJobname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional JobStatus jobStatus = 3;
 * @return {!proto.jobmanagement.JobStatus}
 */
proto.jobmanagement.Job.prototype.getJobstatus = function() {
  return /** @type {!proto.jobmanagement.JobStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.jobmanagement.JobStatus} value
 * @return {!proto.jobmanagement.Job} returns this
 */
proto.jobmanagement.Job.prototype.setJobstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string createdAt = 4;
 * @return {string}
 */
proto.jobmanagement.Job.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.Job} returns this
 */
proto.jobmanagement.Job.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jobmanagement.JobList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jobmanagement.JobList.prototype.toObject = function(opt_includeInstance) {
  return proto.jobmanagement.JobList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jobmanagement.JobList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobList.toObject = function(includeInstance, msg) {
  var f, obj = {
jobsList: jspb.Message.toObjectList(msg.getJobsList(),
    proto.jobmanagement.Job.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobmanagement.JobList}
 */
proto.jobmanagement.JobList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobmanagement.JobList;
  return proto.jobmanagement.JobList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobmanagement.JobList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobmanagement.JobList}
 */
proto.jobmanagement.JobList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.jobmanagement.Job;
      reader.readMessage(value,proto.jobmanagement.Job.deserializeBinaryFromReader);
      msg.addJobs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jobmanagement.JobList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jobmanagement.JobList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobmanagement.JobList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.jobmanagement.Job.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Job jobs = 1;
 * @return {!Array<!proto.jobmanagement.Job>}
 */
proto.jobmanagement.JobList.prototype.getJobsList = function() {
  return /** @type{!Array<!proto.jobmanagement.Job>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jobmanagement.Job, 1));
};


/**
 * @param {!Array<!proto.jobmanagement.Job>} value
 * @return {!proto.jobmanagement.JobList} returns this
*/
proto.jobmanagement.JobList.prototype.setJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.jobmanagement.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jobmanagement.Job}
 */
proto.jobmanagement.JobList.prototype.addJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.jobmanagement.Job, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jobmanagement.JobList} returns this
 */
proto.jobmanagement.JobList.prototype.clearJobsList = function() {
  return this.setJobsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jobmanagement.JobId.prototype.toObject = function(opt_includeInstance) {
  return proto.jobmanagement.JobId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jobmanagement.JobId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobId.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobmanagement.JobId}
 */
proto.jobmanagement.JobId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobmanagement.JobId;
  return proto.jobmanagement.JobId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobmanagement.JobId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobmanagement.JobId}
 */
proto.jobmanagement.JobId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jobmanagement.JobId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jobmanagement.JobId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobmanagement.JobId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.jobmanagement.JobId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.JobId} returns this
 */
proto.jobmanagement.JobId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jobmanagement.JobDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.jobmanagement.JobDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jobmanagement.JobDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
jobid: jspb.Message.getFieldWithDefault(msg, 1, ""),
jobname: jspb.Message.getFieldWithDefault(msg, 2, ""),
jobstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
createdat: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobmanagement.JobDetails}
 */
proto.jobmanagement.JobDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobmanagement.JobDetails;
  return proto.jobmanagement.JobDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobmanagement.JobDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobmanagement.JobDetails}
 */
proto.jobmanagement.JobDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobname(value);
      break;
    case 3:
      var value = /** @type {!proto.jobmanagement.JobStatus} */ (reader.readEnum());
      msg.setJobstatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jobmanagement.JobDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jobmanagement.JobDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobmanagement.JobDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.JobDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJobstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string jobId = 1;
 * @return {string}
 */
proto.jobmanagement.JobDetails.prototype.getJobid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.JobDetails} returns this
 */
proto.jobmanagement.JobDetails.prototype.setJobid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string jobName = 2;
 * @return {string}
 */
proto.jobmanagement.JobDetails.prototype.getJobname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.JobDetails} returns this
 */
proto.jobmanagement.JobDetails.prototype.setJobname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional JobStatus jobStatus = 3;
 * @return {!proto.jobmanagement.JobStatus}
 */
proto.jobmanagement.JobDetails.prototype.getJobstatus = function() {
  return /** @type {!proto.jobmanagement.JobStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.jobmanagement.JobStatus} value
 * @return {!proto.jobmanagement.JobDetails} returns this
 */
proto.jobmanagement.JobDetails.prototype.setJobstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string createdAt = 4;
 * @return {string}
 */
proto.jobmanagement.JobDetails.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.jobmanagement.JobDetails} returns this
 */
proto.jobmanagement.JobDetails.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jobmanagement.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.jobmanagement.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jobmanagement.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobmanagement.Empty}
 */
proto.jobmanagement.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobmanagement.Empty;
  return proto.jobmanagement.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobmanagement.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobmanagement.Empty}
 */
proto.jobmanagement.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jobmanagement.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jobmanagement.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobmanagement.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jobmanagement.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.jobmanagement.JobStatus = {
  SUBMITTED: 0,
  RUNNING: 1,
  COMPLETED: 2
};

goog.object.extend(exports, proto.jobmanagement);
