/*
|
|	tmpl.js - a simple boilerplate to kick off a
|	native JavaScript plugin.
|
|	credit: 	IonikLabs (http://www.ioniklabs.com)
|	author: 	Matt Johnson
|	source: 	https://github.com/ioniklabs/tmpl.js 
|
| */

var tmpl = ( function( document, window ) {

	function tmpl( options ) {
		this.options = {};
		if ( is__object( options ) ) this.options = extend( this.options, options );
	};

	tmpl.prototype.update__options = function( options ) {
		if ( !is__object( options ) ) return on__error( 0 );
		this.options = extend( this.options, options );
	};

	tmpl.prototype.function_name = function() {};

	function function_name() {};

	/*
	|
	|	Helper functions
	|
	| */

	function extend( obj_1, obj_2 ) {
		for (var key in obj_2) {
			obj_1[key] = obj_2[key];
		}
		return obj_1;
	};

	function is__array( variable ) {
		return variable instanceof Array ? true : false;
	};

	function is__object( variable ) {
		return variable instanceof Object ? true : false;
	};

	function is__function( variable ) {
		return variable instanceof Function ? true : false;
	};

	function is__valid_type( variable, valid_types ) {
		return valid_types.indexOf( typeof variable ) !== -1 ? true : false;
	};

	/*
	|
	|	Error handling
	|
	| */

	function on__error( id ) {
		throw {
			error_code: id,
			error_msg: get__error_msg( id )
		};
	};

	function get__error_msg( id, msg ) {
		var error_msg;
		switch( id ) {
			case 0:
			default:
				error_msg = 'unknown';
		}
		return error_msg;
	};

	/*
	|
	|	Polyfills
	|
	| */

	return tmpl;

} )( document, window );
