exports.description = 'Create a new feature in GNCWEB Project';
exports.notes = 'Create a new feature in GNCWEB Project';
exports.warnOn = ['*.js', '*.html'];

exports.template = function(grunt, init, done) {

	init.process({}, [
		{
          name: 'module_name',
          message: 'Who is the module?',
          default: 'foo',
          validator: /^[\w\-\.]+$/
        },
        {
          name: 'model_name',
          message: 'Who is the model?',
          default: 'Foo',
          validator: /^[\w\-\.]+$/
        },
        {
          name: 'controller_name',
          message: 'Who is the controller?',
          default: 'FooController',
          validator: /^[\w\-\.]+$/
        },
        {
          name: 'service_name',
          message: 'Who is the service?',
          default: 'FooService',
          validator: /^[\w\-\.]+$/
        }
	], function(err, props){
		props.lower_model_name = props.model_name.toLowerCase();
		props.search_page_name = 'search' + props.model_name;
		props.create_page_name = 'create' + props.model_name;
		var files = init.filesToCopy(props);
		init.copyAndProcess(files, props);
	});
};