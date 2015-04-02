var searchIndex = {};
searchIndex['unix_socket'] = {"items":[[0,"","unix_socket","Support for Unix domain socket clients and servers.",null,null],[3,"SocketAddr","","An address associated with a Unix socket.",null,null],[3,"UnixStream","","A stream which communicates over a Unix domain socket.",null,null],[3,"UnixListener","","A structure representing a Unix domain socket server.",null,null],[3,"Incoming","","An iterator over incoming connections to a `UnixListener`.",null,null],[4,"AddressKind","","The kind of an address associated with a Unix socket.",null,null],[13,"Unnamed","","An unnamed address.",0,null],[13,"Pathname","","An address corresponding to a path on the filesystem.",0,null],[13,"Abstract","","An address in an abstract namespace unrelated to the filesystem.",0,null],[11,"clone","","",0,{"inputs":[{"name":"addresskind"}],"output":{"name":"addresskind"}}],[11,"fmt","","",0,{"inputs":[{"name":"addresskind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"socketaddr"}],"output":{"name":"socketaddr"}}],[11,"kind","","Returns the kind of the address.",1,{"inputs":[{"name":"socketaddr"}],"output":{"name":"addresskind"}}],[11,"address","","Returns the value of the address.",1,{"inputs":[{"name":"socketaddr"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"socketaddr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"unixstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Connect to the socket named by `path`.",2,{"inputs":[{"name":"unixstream"},{"name":"p"}],"output":{"name":"result"}}],[11,"unnamed","","Create an unnamed pair of connected sockets.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"try_clone","","Create a new independently owned handle to the underlying socket.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this connection.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote half of this connection.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"shutdown","","Shut down the read, write, or both halves of this connection.",2,{"inputs":[{"name":"unixstream"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"read","","",2,null],[11,"write","","",2,null],[11,"flush","","",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"rawfd"}}],[11,"fmt","","",3,{"inputs":[{"name":"unixlistener"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a new `UnixListener` which will be bound to the specified\nsocket.",3,{"inputs":[{"name":"unixlistener"},{"name":"p"}],"output":{"name":"result"}}],[11,"accept","","Accepts a new incoming connection to this listener.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"try_clone","","Create a new independently owned handle to the underlying socket.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this connection.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"incoming","","Returns an iterator over incoming connections.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"incoming"}}],[11,"as_raw_fd","","",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"rawfd"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[11,"fmt","","",4,{"inputs":[{"name":"incoming"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Item","","",null,null],[11,"next","","",4,{"inputs":[{"name":"incoming"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null]],"paths":[[4,"AddressKind"],[3,"SocketAddr"],[3,"UnixStream"],[3,"UnixListener"],[3,"Incoming"]]};
initSearch(searchIndex);
