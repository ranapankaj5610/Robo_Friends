import React from 'react';
import Card from './Card';

//from app.js filtered robort passes as a props here
const Cardlist=({ robots })=>{
	return(
		<div>
		  {
			robots.map((user,i)=>
			  {
				return(
				  <Card  
                  key={i}
                  id={robots[i].id}
                  name={robots[i].name}
                  email={robots[i].email}
                  />
				);
			})
		}
		</div>
	);
}
export default Cardlist;