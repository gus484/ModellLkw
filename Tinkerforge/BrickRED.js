/* ***********************************************************
 * This file was automatically generated on 2014-12-10.      *
 *                                                           *
 * Bindings Version 2.0.4                                    *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generator git on tinkerforge.com                   *
 *************************************************************/

var Device = require('./Device');

BrickRED.DEVICE_IDENTIFIER = 17;
BrickRED.CALLBACK_ASYNC_FILE_READ = 30;
BrickRED.CALLBACK_ASYNC_FILE_WRITE = 31;
BrickRED.CALLBACK_FILE_EVENTS_OCCURRED = 32;
BrickRED.CALLBACK_PROCESS_STATE_CHANGED = 45;
BrickRED.CALLBACK_PROGRAM_SCHEDULER_STATE_CHANGED = 65;
BrickRED.CALLBACK_PROGRAM_PROCESS_SPAWNED = 66;
BrickRED.FUNCTION_CREATE_SESSION = 1;
BrickRED.FUNCTION_EXPIRE_SESSION = 2;
BrickRED.FUNCTION_EXPIRE_SESSION_UNCHECKED = 3;
BrickRED.FUNCTION_KEEP_SESSION_ALIVE = 4;
BrickRED.FUNCTION_RELEASE_OBJECT = 5;
BrickRED.FUNCTION_RELEASE_OBJECT_UNCHECKED = 6;
BrickRED.FUNCTION_ALLOCATE_STRING = 7;
BrickRED.FUNCTION_TRUNCATE_STRING = 8;
BrickRED.FUNCTION_GET_STRING_LENGTH = 9;
BrickRED.FUNCTION_SET_STRING_CHUNK = 10;
BrickRED.FUNCTION_GET_STRING_CHUNK = 11;
BrickRED.FUNCTION_ALLOCATE_LIST = 12;
BrickRED.FUNCTION_GET_LIST_LENGTH = 13;
BrickRED.FUNCTION_GET_LIST_ITEM = 14;
BrickRED.FUNCTION_APPEND_TO_LIST = 15;
BrickRED.FUNCTION_REMOVE_FROM_LIST = 16;
BrickRED.FUNCTION_OPEN_FILE = 17;
BrickRED.FUNCTION_CREATE_PIPE = 18;
BrickRED.FUNCTION_GET_FILE_INFO = 19;
BrickRED.FUNCTION_READ_FILE = 20;
BrickRED.FUNCTION_READ_FILE_ASYNC = 21;
BrickRED.FUNCTION_ABORT_ASYNC_FILE_READ = 22;
BrickRED.FUNCTION_WRITE_FILE = 23;
BrickRED.FUNCTION_WRITE_FILE_UNCHECKED = 24;
BrickRED.FUNCTION_WRITE_FILE_ASYNC = 25;
BrickRED.FUNCTION_SET_FILE_POSITION = 26;
BrickRED.FUNCTION_GET_FILE_POSITION = 27;
BrickRED.FUNCTION_SET_FILE_EVENTS = 28;
BrickRED.FUNCTION_GET_FILE_EVENTS = 29;
BrickRED.FUNCTION_OPEN_DIRECTORY = 33;
BrickRED.FUNCTION_GET_DIRECTORY_NAME = 34;
BrickRED.FUNCTION_GET_NEXT_DIRECTORY_ENTRY = 35;
BrickRED.FUNCTION_REWIND_DIRECTORY = 36;
BrickRED.FUNCTION_CREATE_DIRECTORY = 37;
BrickRED.FUNCTION_GET_PROCESSES = 38;
BrickRED.FUNCTION_SPAWN_PROCESS = 39;
BrickRED.FUNCTION_KILL_PROCESS = 40;
BrickRED.FUNCTION_GET_PROCESS_COMMAND = 41;
BrickRED.FUNCTION_GET_PROCESS_IDENTITY = 42;
BrickRED.FUNCTION_GET_PROCESS_STDIO = 43;
BrickRED.FUNCTION_GET_PROCESS_STATE = 44;
BrickRED.FUNCTION_GET_PROGRAMS = 46;
BrickRED.FUNCTION_DEFINE_PROGRAM = 47;
BrickRED.FUNCTION_PURGE_PROGRAM = 48;
BrickRED.FUNCTION_GET_PROGRAM_IDENTIFIER = 49;
BrickRED.FUNCTION_GET_PROGRAM_ROOT_DIRECTORY = 50;
BrickRED.FUNCTION_SET_PROGRAM_COMMAND = 51;
BrickRED.FUNCTION_GET_PROGRAM_COMMAND = 52;
BrickRED.FUNCTION_SET_PROGRAM_STDIO_REDIRECTION = 53;
BrickRED.FUNCTION_GET_PROGRAM_STDIO_REDIRECTION = 54;
BrickRED.FUNCTION_SET_PROGRAM_SCHEDULE = 55;
BrickRED.FUNCTION_GET_PROGRAM_SCHEDULE = 56;
BrickRED.FUNCTION_GET_PROGRAM_SCHEDULER_STATE = 57;
BrickRED.FUNCTION_CONTINUE_PROGRAM_SCHEDULE = 58;
BrickRED.FUNCTION_START_PROGRAM = 59;
BrickRED.FUNCTION_GET_LAST_SPAWNED_PROGRAM_PROCESS = 60;
BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_NAMES = 61;
BrickRED.FUNCTION_SET_CUSTOM_PROGRAM_OPTION_VALUE = 62;
BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_VALUE = 63;
BrickRED.FUNCTION_REMOVE_CUSTOM_PROGRAM_OPTION = 64;
BrickRED.FUNCTION_GET_IDENTITY = 255;
BrickRED.OBJECT_TYPE_STRING = 0;
BrickRED.OBJECT_TYPE_LIST = 1;
BrickRED.OBJECT_TYPE_FILE = 2;
BrickRED.OBJECT_TYPE_DIRECTORY = 3;
BrickRED.OBJECT_TYPE_PROCESS = 4;
BrickRED.OBJECT_TYPE_PROGRAM = 5;
BrickRED.FILE_FLAG_READ_ONLY = 1;
BrickRED.FILE_FLAG_WRITE_ONLY = 2;
BrickRED.FILE_FLAG_READ_WRITE = 4;
BrickRED.FILE_FLAG_APPEND = 8;
BrickRED.FILE_FLAG_CREATE = 16;
BrickRED.FILE_FLAG_EXCLUSIVE = 32;
BrickRED.FILE_FLAG_NON_BLOCKING = 64;
BrickRED.FILE_FLAG_TRUNCATE = 128;
BrickRED.FILE_FLAG_TEMPORARY = 256;
BrickRED.FILE_FLAG_REPLACE = 512;
BrickRED.FILE_PERMISSION_USER_ALL = 448;
BrickRED.FILE_PERMISSION_USER_READ = 256;
BrickRED.FILE_PERMISSION_USER_WRITE = 128;
BrickRED.FILE_PERMISSION_USER_EXECUTE = 64;
BrickRED.FILE_PERMISSION_GROUP_ALL = 56;
BrickRED.FILE_PERMISSION_GROUP_READ = 32;
BrickRED.FILE_PERMISSION_GROUP_WRITE = 16;
BrickRED.FILE_PERMISSION_GROUP_EXECUTE = 8;
BrickRED.FILE_PERMISSION_OTHERS_ALL = 7;
BrickRED.FILE_PERMISSION_OTHERS_READ = 4;
BrickRED.FILE_PERMISSION_OTHERS_WRITE = 2;
BrickRED.FILE_PERMISSION_OTHERS_EXECUTE = 1;
BrickRED.PIPE_FLAG_NON_BLOCKING_READ = 1;
BrickRED.PIPE_FLAG_NON_BLOCKING_WRITE = 2;
BrickRED.FILE_TYPE_UNKNOWN = 0;
BrickRED.FILE_TYPE_REGULAR = 1;
BrickRED.FILE_TYPE_DIRECTORY = 2;
BrickRED.FILE_TYPE_CHARACTER = 3;
BrickRED.FILE_TYPE_BLOCK = 4;
BrickRED.FILE_TYPE_FIFO = 5;
BrickRED.FILE_TYPE_SYMLINK = 6;
BrickRED.FILE_TYPE_SOCKET = 7;
BrickRED.FILE_TYPE_PIPE = 8;
BrickRED.FILE_ORIGIN_BEGINNING = 0;
BrickRED.FILE_ORIGIN_CURRENT = 1;
BrickRED.FILE_ORIGIN_END = 2;
BrickRED.FILE_EVENT_READABLE = 1;
BrickRED.FILE_EVENT_WRITABLE = 2;
BrickRED.DIRECTORY_ENTRY_TYPE_UNKNOWN = 0;
BrickRED.DIRECTORY_ENTRY_TYPE_REGULAR = 1;
BrickRED.DIRECTORY_ENTRY_TYPE_DIRECTORY = 2;
BrickRED.DIRECTORY_ENTRY_TYPE_CHARACTER = 3;
BrickRED.DIRECTORY_ENTRY_TYPE_BLOCK = 4;
BrickRED.DIRECTORY_ENTRY_TYPE_FIFO = 5;
BrickRED.DIRECTORY_ENTRY_TYPE_SYMLINK = 6;
BrickRED.DIRECTORY_ENTRY_TYPE_SOCKET = 7;
BrickRED.DIRECTORY_FLAG_RECURSIVE = 1;
BrickRED.DIRECTORY_FLAG_EXCLUSIVE = 2;
BrickRED.PROCESS_SIGNAL_INTERRUPT = 2;
BrickRED.PROCESS_SIGNAL_QUIT = 3;
BrickRED.PROCESS_SIGNAL_ABORT = 6;
BrickRED.PROCESS_SIGNAL_KILL = 9;
BrickRED.PROCESS_SIGNAL_USER1 = 10;
BrickRED.PROCESS_SIGNAL_USER2 = 12;
BrickRED.PROCESS_SIGNAL_TERMINATE = 15;
BrickRED.PROCESS_SIGNAL_CONTINUE = 18;
BrickRED.PROCESS_SIGNAL_STOP = 19;
BrickRED.PROCESS_STATE_UNKNOWN = 0;
BrickRED.PROCESS_STATE_RUNNING = 1;
BrickRED.PROCESS_STATE_ERROR = 2;
BrickRED.PROCESS_STATE_EXITED = 3;
BrickRED.PROCESS_STATE_KILLED = 4;
BrickRED.PROCESS_STATE_STOPPED = 5;
BrickRED.PROGRAM_STDIO_REDIRECTION_DEV_NULL = 0;
BrickRED.PROGRAM_STDIO_REDIRECTION_PIPE = 1;
BrickRED.PROGRAM_STDIO_REDIRECTION_FILE = 2;
BrickRED.PROGRAM_STDIO_REDIRECTION_INDIVIDUAL_LOG = 3;
BrickRED.PROGRAM_STDIO_REDIRECTION_CONTINUOUS_LOG = 4;
BrickRED.PROGRAM_STDIO_REDIRECTION_STDOUT = 5;
BrickRED.PROGRAM_START_MODE_NEVER = 0;
BrickRED.PROGRAM_START_MODE_ALWAYS = 1;
BrickRED.PROGRAM_START_MODE_INTERVAL = 2;
BrickRED.PROGRAM_START_MODE_CRON = 3;
BrickRED.PROGRAM_SCHEDULER_STATE_STOPPED = 0;
BrickRED.PROGRAM_SCHEDULER_STATE_RUNNING = 1;

function BrickRED(uid, ipcon) {
	//Device for running user programs standalone on the stack

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickRED.prototype = Object.create(Device);
	this.responseExpected = {};
	this.callbackFormats = {};
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickRED.FUNCTION_CREATE_SESSION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_EXPIRE_SESSION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_EXPIRE_SESSION_UNCHECKED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickRED.FUNCTION_KEEP_SESSION_ALIVE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_RELEASE_OBJECT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_RELEASE_OBJECT_UNCHECKED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickRED.FUNCTION_ALLOCATE_STRING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_TRUNCATE_STRING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_STRING_LENGTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_STRING_CHUNK] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_STRING_CHUNK] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_ALLOCATE_LIST] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_LIST_LENGTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_LIST_ITEM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_APPEND_TO_LIST] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_REMOVE_FROM_LIST] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_OPEN_FILE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_CREATE_PIPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_FILE_INFO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_READ_FILE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_READ_FILE_ASYNC] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickRED.FUNCTION_ABORT_ASYNC_FILE_READ] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_WRITE_FILE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_WRITE_FILE_UNCHECKED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickRED.FUNCTION_WRITE_FILE_ASYNC] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickRED.FUNCTION_SET_FILE_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_FILE_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_FILE_EVENTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_FILE_EVENTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.CALLBACK_ASYNC_FILE_READ] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.CALLBACK_ASYNC_FILE_WRITE] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.CALLBACK_FILE_EVENTS_OCCURRED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.FUNCTION_OPEN_DIRECTORY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_DIRECTORY_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_NEXT_DIRECTORY_ENTRY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_REWIND_DIRECTORY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_CREATE_DIRECTORY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROCESSES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SPAWN_PROCESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_KILL_PROCESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROCESS_COMMAND] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROCESS_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROCESS_STDIO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROCESS_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.CALLBACK_PROCESS_STATE_CHANGED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAMS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_DEFINE_PROGRAM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_PURGE_PROGRAM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_IDENTIFIER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_ROOT_DIRECTORY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_PROGRAM_COMMAND] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_COMMAND] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_PROGRAM_STDIO_REDIRECTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_STDIO_REDIRECTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_PROGRAM_SCHEDULE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_SCHEDULE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_PROGRAM_SCHEDULER_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_CONTINUE_PROGRAM_SCHEDULE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_START_PROGRAM] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_LAST_SPAWNED_PROGRAM_PROCESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_NAMES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_SET_CUSTOM_PROGRAM_OPTION_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.FUNCTION_REMOVE_CUSTOM_PROGRAM_OPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickRED.CALLBACK_PROGRAM_SCHEDULER_STATE_CHANGED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.CALLBACK_PROGRAM_PROCESS_SPAWNED] = Device.RESPONSE_EXPECTED_ALWAYS_FALSE;
	this.responseExpected[BrickRED.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickRED.CALLBACK_ASYNC_FILE_READ] = 'H B B60 B';
	this.callbackFormats[BrickRED.CALLBACK_ASYNC_FILE_WRITE] = 'H B B';
	this.callbackFormats[BrickRED.CALLBACK_FILE_EVENTS_OCCURRED] = 'H H';
	this.callbackFormats[BrickRED.CALLBACK_PROCESS_STATE_CHANGED] = 'H B Q B';
	this.callbackFormats[BrickRED.CALLBACK_PROGRAM_SCHEDULER_STATE_CHANGED] = 'H';
	this.callbackFormats[BrickRED.CALLBACK_PROGRAM_PROCESS_SPAWNED] = 'H';

	this.createSession = function(lifetime, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_CREATE_SESSION, [lifetime], 'I', 'B H', returnCallback, errorCallback);
	};
	this.expireSession = function(sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_EXPIRE_SESSION, [sessionId], 'H', 'B', returnCallback, errorCallback);
	};
	this.expireSessionUnchecked = function(sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_EXPIRE_SESSION_UNCHECKED, [sessionId], 'H', '', returnCallback, errorCallback);
	};
	this.keepSessionAlive = function(sessionId, lifetime, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_KEEP_SESSION_ALIVE, [sessionId, lifetime], 'H I', 'B', returnCallback, errorCallback);
	};
	this.releaseObject = function(objectId, sessionId, returnCallback, errorCallback) {
		/*
		Decreases the reference count of an object by one and returns the resulting
		error code. If the reference count reaches zero the object gets destroyed.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_RELEASE_OBJECT, [objectId, sessionId], 'H H', 'B', returnCallback, errorCallback);
	};
	this.releaseObjectUnchecked = function(objectId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_RELEASE_OBJECT_UNCHECKED, [objectId, sessionId], 'H H', '', returnCallback, errorCallback);
	};
	this.allocateString = function(lengthToReserve, buffer, sessionId, returnCallback, errorCallback) {
		/*
		Allocates a new string object, reserves ``length_to_reserve`` bytes memory
		for it and sets up to the first 60 bytes. Set ``length_to_reserve`` to the
		length of the string that should be stored in the string object.
		
		Returns the object ID of the new string object and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_ALLOCATE_STRING, [lengthToReserve, buffer, sessionId], 'I s58 H', 'B H', returnCallback, errorCallback);
	};
	this.truncateString = function(stringId, length, returnCallback, errorCallback) {
		/*
		Truncates a string object to ``length`` bytes and returns the resulting
		error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_TRUNCATE_STRING, [stringId, length], 'H I', 'B', returnCallback, errorCallback);
	};
	this.getStringLength = function(stringId, returnCallback, errorCallback) {
		/*
		Returns the length of a string object in bytes and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_STRING_LENGTH, [stringId], 'H', 'B I', returnCallback, errorCallback);
	};
	this.setStringChunk = function(stringId, offset, buffer, returnCallback, errorCallback) {
		/*
		Sets a chunk of up to 58 bytes in a string object beginning at ``offset``.
		
		Returns the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_STRING_CHUNK, [stringId, offset, buffer], 'H I s58', 'B', returnCallback, errorCallback);
	};
	this.getStringChunk = function(stringId, offset, returnCallback, errorCallback) {
		/*
		Returns a chunk up to 63 bytes from a string object beginning at ``offset`` and
		returns the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_STRING_CHUNK, [stringId, offset], 'H I', 'B s63', returnCallback, errorCallback);
	};
	this.allocateList = function(lengthToReserve, sessionId, returnCallback, errorCallback) {
		/*
		Allocates a new list object and reserves memory for ``length_to_reserve``
		items. Set ``length_to_reserve`` to the number of items that should be stored
		in the list object.
		
		Returns the object ID of the new list object and the resulting error code.
		
		When a list object gets destroyed then the reference count of each object in
		the list object is decreased by one.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_ALLOCATE_LIST, [lengthToReserve, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.getListLength = function(listId, returnCallback, errorCallback) {
		/*
		Returns the length of a list object in items and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_LIST_LENGTH, [listId], 'H', 'B H', returnCallback, errorCallback);
	};
	this.getListItem = function(listId, index, sessionId, returnCallback, errorCallback) {
		/*
		Returns the object ID and type of the object stored at ``index`` in a list
		object and returns the resulting error code.
		
		Possible object types are:
		
		* String = 0
		* List = 1
		* File = 2
		* Directory = 3
		* Process = 4
		* Program = 5
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_LIST_ITEM, [listId, index, sessionId], 'H H H', 'B H B', returnCallback, errorCallback);
	};
	this.appendToList = function(listId, itemObjectId, returnCallback, errorCallback) {
		/*
		Appends an object to a list object and increases the reference count of the
		appended object by one.
		
		Returns the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_APPEND_TO_LIST, [listId, itemObjectId], 'H H', 'B', returnCallback, errorCallback);
	};
	this.removeFromList = function(listId, index, returnCallback, errorCallback) {
		/*
		Removes the object stored at ``index`` from a list object and decreases the
		reference count of the removed object by one.
		
		Returns the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_REMOVE_FROM_LIST, [listId, index], 'H H', 'B', returnCallback, errorCallback);
	};
	this.openFile = function(nameStringId, flags, permissions, uid, gid, sessionId, returnCallback, errorCallback) {
		/*
		Opens an existing file or creates a new file and allocates a new file object
		for it.
		
		FIXME: name has to be absolute
		
		The reference count of the name string object is increased by one. When the
		file object gets destroyed then the reference count of the name string object is
		decreased by one. Also the name string object is locked and cannot be modified
		while the file object holds a reference to it.
		
		The ``flags`` parameter takes a ORed combination of the following possible file
		flags (in hexadecimal notation):
		
		* ReadOnly = 0x0001 (O_RDONLY)
		* WriteOnly = 0x0002 (O_WRONLY)
		* ReadWrite = 0x0004 (O_RDWR)
		* Append = 0x0008 (O_APPEND)
		* Create = 0x0010 (O_CREAT)
		* Exclusive = 0x0020 (O_EXCL)
		* NonBlocking = 0x0040 (O_NONBLOCK)
		* Truncate = 0x0080 (O_TRUNC)
		* Temporary = 0x0100
		* Replace = 0x0200
		
		FIXME: explain *Temporary* and *Replace* flag
		
		The ``permissions`` parameter takes a ORed combination of the following
		possible file permissions (in octal notation) that match the common UNIX
		permission bits:
		
		* UserRead = 00400
		* UserWrite = 00200
		* UserExecute = 00100
		* GroupRead = 00040
		* GroupWrite = 00020
		* GroupExecute = 00010
		* OthersRead = 00004
		* OthersWrite = 00002
		* OthersExecute = 00001
		
		Returns the object ID of the new file object and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_OPEN_FILE, [nameStringId, flags, permissions, uid, gid, sessionId], 'H I H I I H', 'B H', returnCallback, errorCallback);
	};
	this.createPipe = function(flags, length, sessionId, returnCallback, errorCallback) {
		/*
		Creates a new pipe and allocates a new file object for it.
		
		The ``flags`` parameter takes a ORed combination of the following possible
		pipe flags (in hexadecimal notation):
		
		* NonBlockingRead = 0x0001
		* NonBlockingWrite = 0x0002
		
		The length of the pipe buffer can be specified with the ``length`` parameter
		in bytes. If length is set to zero, then the default pipe buffer length is used.
		
		Returns the object ID of the new file object and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_CREATE_PIPE, [flags, length, sessionId], 'I Q H', 'B H', returnCallback, errorCallback);
	};
	this.getFileInfo = function(fileId, sessionId, returnCallback, errorCallback) {
		/*
		Returns various information about a file and the resulting error code.
		
		Possible file types are:
		
		* Unknown = 0
		* Regular = 1
		* Directory = 2
		* Character = 3
		* Block = 4
		* FIFO = 5
		* Symlink = 6
		* Socket = 7
		* Pipe = 8
		
		If the file type is *Pipe* then the returned name string object is invalid,
		because a pipe has no name. Otherwise the returned name string object was used
		to open or create the file object, as passed to :func:`OpenFile`.
		
		The returned flags were used to open or create the file object, as passed to
		:func:`OpenFile` or :func:`CreatePipe`. See the respective function for a list
		of possible file and pipe flags.
		
		FIXME: everything except flags and length is invalid if file type is *Pipe*
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_FILE_INFO, [fileId, sessionId], 'H H', 'B B H I H I I Q Q Q Q', returnCallback, errorCallback);
	};
	this.readFile = function(fileId, lengthToRead, returnCallback, errorCallback) {
		/*
		Reads up to 62 bytes from a file object.
		
		Returns the bytes read, the actual number of bytes read and the resulting
		error code.
		
		If there is not data to be read, either because the file position reached
		end-of-file or because there is not data in the pipe, then zero bytes are
		returned.
		
		If the file object was created by :func:`OpenFile` without the *NonBlocking*
		flag or by :func:`CreatePipe` without the *NonBlockingRead* flag then the
		error code *NotSupported* is returned.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_READ_FILE, [fileId, lengthToRead], 'H B', 'B B62 B', returnCallback, errorCallback);
	};
	this.readFileAsync = function(fileId, lengthToRead, returnCallback, errorCallback) {
		/*
		Reads up to 2\ :sup:`63`\  - 1 bytes from a file object asynchronously.
		
		Reports the bytes read (in 60 byte chunks), the actual number of bytes read and
		the resulting error code via the :func:`AsyncFileRead` callback.
		
		If there is not data to be read, either because the file position reached
		end-of-file or because there is not data in the pipe, then zero bytes are
		reported.
		
		If the file object was created by :func:`OpenFile` without the *NonBlocking*
		flag or by :func:`CreatePipe` without the *NonBlockingRead* flag then the error
		code *NotSupported* is reported via the :func:`AsyncFileRead` callback.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_READ_FILE_ASYNC, [fileId, lengthToRead], 'H Q', '', returnCallback, errorCallback);
	};
	this.abortAsyncFileRead = function(fileId, returnCallback, errorCallback) {
		/*
		Aborts a :func:`ReadFileAsync` operation in progress.
		
		Returns the resulting error code.
		
		On success the :func:`AsyncFileRead` callback will report *OperationAborted*.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_ABORT_ASYNC_FILE_READ, [fileId], 'H', 'B', returnCallback, errorCallback);
	};
	this.writeFile = function(fileId, buffer, lengthToWrite, returnCallback, errorCallback) {
		/*
		Writes up to 61 bytes to a file object.
		
		Returns the actual number of bytes written and the resulting error code.
		
		If the file object was created by :func:`OpenFile` without the *NonBlocking*
		flag or by :func:`CreatePipe` without the *NonBlockingWrite* flag then the
		error code *NotSupported* is returned.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_WRITE_FILE, [fileId, buffer, lengthToWrite], 'H B61 B', 'B B', returnCallback, errorCallback);
	};
	this.writeFileUnchecked = function(fileId, buffer, lengthToWrite, returnCallback, errorCallback) {
		/*
		Writes up to 61 bytes to a file object.
		
		Does neither report the actual number of bytes written nor the resulting error
		code.
		
		If the file object was created by :func:`OpenFile` without the *NonBlocking*
		flag or by :func:`CreatePipe` without the *NonBlockingWrite* flag then the
		write operation will fail silently.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_WRITE_FILE_UNCHECKED, [fileId, buffer, lengthToWrite], 'H B61 B', '', returnCallback, errorCallback);
	};
	this.writeFileAsync = function(fileId, buffer, lengthToWrite, returnCallback, errorCallback) {
		/*
		Writes up to 61 bytes to a file object.
		
		Reports the actual number of bytes written and the resulting error code via the
		:func:`AsyncFileWrite` callback.
		
		If the file object was created by :func:`OpenFile` without the *NonBlocking*
		flag or by :func:`CreatePipe` without the *NonBlockingWrite* flag then the
		error code *NotSupported* is reported via the :func:`AsyncFileWrite` callback.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_WRITE_FILE_ASYNC, [fileId, buffer, lengthToWrite], 'H B61 B', '', returnCallback, errorCallback);
	};
	this.setFilePosition = function(fileId, offset, origin, returnCallback, errorCallback) {
		/*
		Set the current seek position of a file object in bytes relative to ``origin``.
		
		Possible file origins are:
		
		* Beginning = 0
		* Current = 1
		* End = 2
		
		Returns the resulting absolute seek position and error code.
		
		If the file object was created by :func:`CreatePipe` then it has no seek
		position and the error code *InvalidSeek* is returned.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_FILE_POSITION, [fileId, offset, origin], 'H q B', 'B Q', returnCallback, errorCallback);
	};
	this.getFilePosition = function(fileId, returnCallback, errorCallback) {
		/*
		Returns the current seek position of a file object in bytes and returns the
		resulting error code.
		
		If the file object was created by :func:`CreatePipe` then it has no seek
		position and the error code *InvalidSeek* is returned.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_FILE_POSITION, [fileId], 'H', 'B Q', returnCallback, errorCallback);
	};
	this.setFileEvents = function(fileId, events, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_FILE_EVENTS, [fileId, events], 'H H', 'B', returnCallback, errorCallback);
	};
	this.getFileEvents = function(fileId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_FILE_EVENTS, [fileId], 'H', 'B H', returnCallback, errorCallback);
	};
	this.openDirectory = function(nameStringId, sessionId, returnCallback, errorCallback) {
		/*
		Opens an existing directory and allocates a new directory object for it.
		
		FIXME: name has to be absolute
		
		The reference count of the name string object is increased by one. When the
		directory object is destroyed then the reference count of the name string
		object is decreased by one. Also the name string object is locked and cannot be
		modified while the directory object holds a reference to it.
		
		Returns the object ID of the new directory object and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_OPEN_DIRECTORY, [nameStringId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.getDirectoryName = function(directoryId, sessionId, returnCallback, errorCallback) {
		/*
		Returns the name of a directory object, as passed to :func:`OpenDirectory`, and
		the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_DIRECTORY_NAME, [directoryId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.getNextDirectoryEntry = function(directoryId, sessionId, returnCallback, errorCallback) {
		/*
		Returns the next entry in a directory object and the resulting error code.
		
		If there is not next entry then error code *NoMoreData* is returned. To rewind
		a directory object call :func:`RewindDirectory`.
		
		Possible directory entry types are:
		
		* Unknown = 0
		* Regular = 1
		* Directory = 2
		* Character = 3
		* Block = 4
		* FIFO = 5
		* Symlink = 6
		* Socket = 7
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_NEXT_DIRECTORY_ENTRY, [directoryId, sessionId], 'H H', 'B H B', returnCallback, errorCallback);
	};
	this.rewindDirectory = function(directoryId, returnCallback, errorCallback) {
		/*
		Rewinds a directory object and returns the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_REWIND_DIRECTORY, [directoryId], 'H', 'B', returnCallback, errorCallback);
	};
	this.createDirectory = function(nameStringId, flags, permissions, uid, gid, returnCallback, errorCallback) {
		/*
		FIXME: name has to be absolute
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_CREATE_DIRECTORY, [nameStringId, flags, permissions, uid, gid], 'H I H I I', 'B', returnCallback, errorCallback);
	};
	this.getProcesses = function(sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROCESSES, [sessionId], 'H', 'B H', returnCallback, errorCallback);
	};
	this.spawnProcess = function(executableStringId, argumentsListId, environmentListId, workingDirectoryStringId, uid, gid, stdinFileId, stdoutFileId, stderrFileId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SPAWN_PROCESS, [executableStringId, argumentsListId, environmentListId, workingDirectoryStringId, uid, gid, stdinFileId, stdoutFileId, stderrFileId, sessionId], 'H H H H I I H H H H', 'B H', returnCallback, errorCallback);
	};
	this.killProcess = function(processId, signal, returnCallback, errorCallback) {
		/*
		Sends a UNIX signal to a process object and returns the resulting error code.
		
		Possible UNIX signals are:
		
		* Interrupt = 2
		* Quit = 3
		* Abort = 6
		* Kill = 9
		* User1 = 10
		* User2 = 12
		* Terminate = 15
		* Continue =  18
		* Stop = 19
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_KILL_PROCESS, [processId, signal], 'H B', 'B', returnCallback, errorCallback);
	};
	this.getProcessCommand = function(processId, sessionId, returnCallback, errorCallback) {
		/*
		Returns the executable, arguments, environment and working directory used to
		spawn a process object, as passed to :func:`SpawnProcess`, and the resulting
		error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROCESS_COMMAND, [processId, sessionId], 'H H', 'B H H H H', returnCallback, errorCallback);
	};
	this.getProcessIdentity = function(processId, returnCallback, errorCallback) {
		/*
		Returns the process ID and the user and group ID used to spawn a process object,
		as passed to :func:`SpawnProcess`, and the resulting error code.
		
		The process ID is only valid if the state is *Running* or *Stopped*, see
		:func:`GetProcessState`.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROCESS_IDENTITY, [processId], 'H', 'B I I I', returnCallback, errorCallback);
	};
	this.getProcessStdio = function(processId, sessionId, returnCallback, errorCallback) {
		/*
		Returns the stdin, stdout and stderr files used to spawn a process object, as
		passed to :func:`SpawnProcess`, and the resulting error code.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROCESS_STDIO, [processId, sessionId], 'H H', 'B H H H', returnCallback, errorCallback);
	};
	this.getProcessState = function(processId, returnCallback, errorCallback) {
		/*
		Returns the current state, timestamp and exit code of a process object, and
		the resulting error code.
		
		Possible process states are:
		
		* Unknown = 0
		* Running = 1
		* Error = 2
		* Exited = 3
		* Killed = 4
		* Stopped = 5
		
		The timestamp represents the UNIX time since when the process is in its current
		state.
		
		The exit code is only valid if the state is *Error*, *Exited*, *Killed* or
		*Stopped* and has different meanings depending on the state:
		
		* Error: error code for error occurred while spawning the process (see below)
		* Exited: exit status of the process
		* Killed: UNIX signal number used to kill the process
		* Stopped: UNIX signal number used to stop the process
		
		Possible exit/error codes in *Error* state are:
		
		* InternalError = 125
		* CannotExecute = 126
		* DoesNotExist = 127
		
		The *CannotExecute* error can be caused by the executable being opened for
		writing.
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROCESS_STATE, [processId], 'H', 'B B Q B', returnCallback, errorCallback);
	};
	this.getPrograms = function(sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAMS, [sessionId], 'H', 'B H', returnCallback, errorCallback);
	};
	this.defineProgram = function(identifierStringId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_DEFINE_PROGRAM, [identifierStringId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.purgeProgram = function(programId, cookie, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_PURGE_PROGRAM, [programId, cookie], 'H I', 'B', returnCallback, errorCallback);
	};
	this.getProgramIdentifier = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_IDENTIFIER, [programId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.getProgramRootDirectory = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		FIXME: root directory is absolute: <home>/programs/<identifier>
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_ROOT_DIRECTORY, [programId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.setProgramCommand = function(programId, executableStringId, argumentsListId, environmentListId, workingDirectoryStringId, returnCallback, errorCallback) {
		/*
		FIXME: working directory is relative to <home>/programs/<identifier>/bin
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_PROGRAM_COMMAND, [programId, executableStringId, argumentsListId, environmentListId, workingDirectoryStringId], 'H H H H H', 'B', returnCallback, errorCallback);
	};
	this.getProgramCommand = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		FIXME: working directory is relative to <home>/programs/<identifier>/bin
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_COMMAND, [programId, sessionId], 'H H', 'B H H H H', returnCallback, errorCallback);
	};
	this.setProgramStdioRedirection = function(programId, stdinRedirection, stdinFileNameStringId, stdoutRedirection, stdoutFileNameStringId, stderrRedirection, stderrFileNameStringId, returnCallback, errorCallback) {
		/*
		FIXME: stdio file names are relative to <home>/programs/<identifier>/bin
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_PROGRAM_STDIO_REDIRECTION, [programId, stdinRedirection, stdinFileNameStringId, stdoutRedirection, stdoutFileNameStringId, stderrRedirection, stderrFileNameStringId], 'H B H B H B H', 'B', returnCallback, errorCallback);
	};
	this.getProgramStdioRedirection = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		FIXME: stdio file names are relative to <home>/programs/<identifier>/bin
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_STDIO_REDIRECTION, [programId, sessionId], 'H H', 'B B H B H B H', returnCallback, errorCallback);
	};
	this.setProgramSchedule = function(programId, startMode, continueAfterError, startInterval, startFieldsStringId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_PROGRAM_SCHEDULE, [programId, startMode, continueAfterError, startInterval, startFieldsStringId], 'H B ? I H', 'B', returnCallback, errorCallback);
	};
	this.getProgramSchedule = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_SCHEDULE, [programId, sessionId], 'H H', 'B B ? I H', returnCallback, errorCallback);
	};
	this.getProgramSchedulerState = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		FIXME: message is currently vaild in error-occurred state only
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_PROGRAM_SCHEDULER_STATE, [programId, sessionId], 'H H', 'B B Q H', returnCallback, errorCallback);
	};
	this.continueProgramSchedule = function(programId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_CONTINUE_PROGRAM_SCHEDULE, [programId], 'H', 'B', returnCallback, errorCallback);
	};
	this.startProgram = function(programId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_START_PROGRAM, [programId], 'H', 'B', returnCallback, errorCallback);
	};
	this.getLastSpawnedProgramProcess = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_LAST_SPAWNED_PROGRAM_PROCESS, [programId, sessionId], 'H H', 'B H Q', returnCallback, errorCallback);
	};
	this.getCustomProgramOptionNames = function(programId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_NAMES, [programId, sessionId], 'H H', 'B H', returnCallback, errorCallback);
	};
	this.setCustomProgramOptionValue = function(programId, nameStringId, valueStringId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_SET_CUSTOM_PROGRAM_OPTION_VALUE, [programId, nameStringId, valueStringId], 'H H H', 'B', returnCallback, errorCallback);
	};
	this.getCustomProgramOptionValue = function(programId, nameStringId, sessionId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_CUSTOM_PROGRAM_OPTION_VALUE, [programId, nameStringId, sessionId], 'H H H', 'B H', returnCallback, errorCallback);
	};
	this.removeCustomProgramOption = function(programId, nameStringId, returnCallback, errorCallback) {
		/*
		
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_REMOVE_CUSTOM_PROGRAM_OPTION, [programId, nameStringId], 'H H', 'B', returnCallback, errorCallback);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to, 
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be '0'-'8' (stack position).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickRED.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback);
	};
}

module.exports = BrickRED;