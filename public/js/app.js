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

function fltr(student){
    return student.gpa >= 3.5;
}


var StudentFilter = React.createClass({
    render: function() {

        var honorStudents = this.props.data.items.filter(fltr).map(function(s){
            
            return (
            
                <tr>

                    <td>{s.name}</td>
                    <td>{s.gpa}</td>
                </tr>

            )
        });

        return (
                <div>
                    <table className="table table-striped table-hover">
                      <thead> Honor Students
                        <tr>
                          <th>Name</th>
                          <th>GPA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {honorStudents}
                      </tbody>
                    </table>
                </div>
            );
    }
});

var StudentPanels = React.createClass({
    render: function() {

        var students = this.props.data.items.map(function(s){
            
            return (
            
            <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Student: {s.id}</h3>
                  </div>
                  <div className="panel-body">
                    <p>Name: {s.name}</p>
                    <p>Email: {s.email}</p>
                    <p>GPA: {s.gpa}</p>
                  </div>
                </div>
            </div>

            )
        });

        return (
				<div>
					{students}
				</div>
        	);
    }
});

var StudentBox = React.createClass({
    render: function() {
        return (
				<div>
                    <div className="jumbotron">
                        <h4> {this.props.data.title} </h4>
                    </div>
                    
					<StudentPanels data={DATA} />
                    <StudentFilter data={DATA} />
				</div>
        	);
    }
});

React.render(<StudentBox data={DATA} />, document.getElementById('student-panels'))