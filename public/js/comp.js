var DATA = {
  title: 'University of Montana: Student Directory',
  items: [
    { id: 1, name: 'John', email: 'John@u.mt.com', gpa: 4.0 },
    { id: 2, name: 'Sarah', email: 'Sarah@u.mt.com', gpa: 3.0 },
    { id: 3, name: 'Paul', email: 'Paul@u.mt.com', gpa: 2.7 },
    { id: 4, name: 'Emily', email: 'Emily@u.mt.com', gpa: 2.6 },
    { id: 5, name: 'Derek', email: 'Derek@u.mt.com', gpa: 3.8 },
    { id: 6, name: 'Kathy', email: 'Kathy@u.mt.com', gpa: 3.9 },
    { id: 7, name: 'Brina', email: 'Brina@u.mt.com', gpa: 2.7 },
    { id: 8, name: 'Clare', email: 'Clare@u.mt.com', gpa: 3.6 },
    { id: 9, name: 'Mike', email: 'Mike@u.mt.com', gpa: 2.0 },
  ]
};

var StudentPanels = React.createClass({
    render: function() {
        var students = this.props.data.items.map(function(item){
            return(
            <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Student ID: {item.id}</h3>
                  </div>
                  <div className="panel-body">
                    <p>Name: {item.name}</p>
                    <p>Item: {item.email}</p>
                    <p>GPA: {item.gpa}</p>
                  </div>
                </div>
            </div>
            );
        });

        return (
                <div>
                    {students}
                </div>
            );
    }
});

function maFil(s){
    return s.gpa >= 3.5;
}

var StudentFilter = React.createClass({
    render: function() {
        console.log(this.props.data.items);
        var students = this.props.data.items.filter(maFil).map(function(item){
            return(
            <div>

                <td>{item.name}</td>

            </div>
            );
        });

        return (
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Honor Roll</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  {students}
                  </tr>
                </tbody>
              </table>
            );
    }
});

var Headline = React.createClass({
    render: function() {
        return (
    
                <div className="jumbotron">
                    <h4> {this.props.data.title}</h4>
                </div>
  
            );
    }
});
var StudentBox = React.createClass({
    render: function() {
        return (

				<div>
                    <div className="jumbotron"> 
                        <h1> {DATA.title} </h1> 
                    </div>
					<StudentPanels data={DATA}/>
                    <StudentFilter data={DATA}/>
				</div>
        	);
    }
});

React.render(<StudentBox/>, document.getElementById('student-list'));