import Link from "./Link";

function Sidebar(){
    const links=[
         {label:'Dropdown',path:'/'},
        {label:'Accordion',path:'/accordion'},
       {label:'Buttons',path:'/buttons'},
        {label:'Modal',path:'/modal'},
        {label:'Table',path:'/table'},
        {label:'Counter',path:'/counter'},
        {label:'Color',path:'/color'},
        {label:'Form',path:'/form'},
        {label:'Counter',path:'/counter'},
    ];
    const renderedLinks=links.map((link)=>{
        return(
            <Link 
                to={link.path} 
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                key={link.label}>
                {link.label}
            </Link>
        );
    });

    return(
        <div className="sticky top-0 overflow-y-auto flex flex-col gap-4">
            {renderedLinks}
        </div>
    );


}

export default Sidebar;