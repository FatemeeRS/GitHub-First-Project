import React from "react";
// import { StyledApp } from "./style";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree } from "react-accessible-treeview";
import cx from "classnames";
import "./styles.css";

function App() {
  const result1 = [
    {
      bookId: 1,
      bookTitle: "آموزش قرآن",
      chapters: [
        {
          chapterId: 7,
          chapterTitle: "ششم",
          chapterMainCode: "GEL1G01F01B01C07",
          subject: [
            {
              subjectId: 16,
              subjectTitle: "مدرسه ی ما",
              subjectMainCode: "GEL1G01F01B01C07S016",
            },
            {
              subjectId: 17,
              subjectTitle: "سوره ی فلق",
              subjectMainCode: "GEL1G01F01B01C07S017",
            },
          ],
        },
        {
          chapterId: 8,
          chapterTitle: "درس هفتم",
          chapterMainCode: "GEL1G01F01B01C08",
          subject: [
            {
              subjectId: 19,
              subjectTitle: "پیامبران خدا",
              subjectMainCode: "GEL1G01F01B01C08S019",
            },
            {
              subjectId: 20,
              subjectTitle: "سوره ی نصر",
              subjectMainCode: "GEL1G01F01B01C08S020",
            },
          ],
        },
      ],
    },
    {
      bookId: 14,
      bookTitle: "ریاضی",
      collapsed: false,
      chapters: [
        {
          chapterId: 149,
          chapterTitle: "فصل 1: الگوها",
          chapterMainCode: "GEL1G03F01B02C01",
          subject: [
            {
              subjectId: 329,
              subjectTitle: "حل مسئله: الگویابی",
              subjectMainCode: "GEL1G03F01B02C01S001",
            },
            {
              subjectId: 330,
              subjectTitle: "شمارش چندتا چندتا",
              subjectMainCode: "GEL1G03F01B02C01S002",
            },
          ],
        },
        {
          chapterId: 150,
          chapterTitle: "فصل 2: عددهای چهار رقمی",
          chapterMainCode: "GEL1G03F01B02C02",
          subject: [
            {
              subjectId: 334,
              subjectTitle: "حل مسئله: الگوسازی",
              subjectMainCode: "GEL1G03F01B02C02S007",
            },
            {
              subjectId: 335,
              subjectTitle: "معرفی عدد هزار",
              subjectMainCode: "GEL1G01F01B01C08S020",
            },
          ],
        },
      ],
    },
  ];

  const folder = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          { name: "Avocados" },
          { name: "Bananas" },
          { name: "Berries" },
          { name: "Oranges" },
          { name: "Pears" },
        ],
      },
      {
        name: "Drinks",
        children: [
          { name: "Apple Juice" },
          { name: "Chocolate" },
          { name: "Coffee" },
          {
            name: "Tea",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ],
          },
        ],
      },
      {
        name: "Vegetables",
        children: [
          { name: "Beets" },
          { name: "Carrots" },
          { name: "Celery" },
          { name: "Lettuce" },
          { name: "Onions" },
        ],
      },
    ],
  };

  const result = {
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          { name: "Avocados", age : 19 },
          { name: "Bananas" , age : 19 },
          { name: "Berries", age : 19 },
          { name: "Oranges" , age : 19},
          { name: "Pears" },
        ],
      },
      //   {
      //     name: "Drinks",
      //     children: [
      //       { name: "Apple Juice" },
      //       { name: "Chocolate" },
      //       { name: "Coffee" },
      //       {
      //         name: "Tea",
      //         children: [
      //           { name: "Black Tea" },
      //           { name: "Green Tea" },
      //           { name: "Red Tea" },
      //           { name: "Matcha" },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "Vegetables",
      //     children: [
      //       { name: "Beets" },
      //       { name: "Carrots" },
      //       { name: "Celery" },
      //       { name: "Lettuce" },
      //       { name: "Onions" },
      //     ],
      //   },
    ],
  };
  const data = flattenTree(folder);
  const data2 = flattenTree(result);

  const ArrowIcon = ({ isOpen, className }) => {
    const baseClass = "arrow";
    const classes = cx(
      baseClass,
      { [`${baseClass}--closed`]: !isOpen },
      { [`${baseClass}--open`]: isOpen },
      className
    );
    return <IoMdArrowDropright className={classes} />;
  };
  const CheckBoxIcon = ({ variant, ...rest }) => {
    switch (variant) {
      case "all":
        return <FaCheckSquare {...rest} />;
      case "none":
        return <FaSquare {...rest} />;
      case "some":
        return <FaMinusSquare {...rest} />;
      default:
        return null;
    }
  };

  // const dataSource =[
  //   {
  //     type:'Employees',
  //     collapsed :false,
  //     people :[
  //       {name: 'fateme' , age : 25 , sex : 'famale' , role: 'coder' , collapsed : false} ,
  //       {name: 'ali' , age : 25 , sex : 'famale' , role: 'coder' , collapsed : false},
  //     ],
  //   },
  //   {
  //     type:'CEO',
  //     collapsed :false,
  //     people :[
  //       {name: 'farnaz' , age : 25 , sex : 'famale' , role: 'coder' , collapsed : false} ,
  //     ],
  //   }
  // ];
  return (
    <div>
      <div className="checkbox">
        <TreeView
          data={data}
          aria-label="Checkbox tree"
          multiSelect
          propagateSelect
          propagateSelectUpwards
          togglableSelect
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            isSelected,
            isHalfSelected,
            getNodeProps,
            level,
            handleSelect,
            handleExpand,
          }) => {
            return (
              <div
                {...getNodeProps({ onClick: handleExpand })}
                style={{ marginLeft: 40 * (level - 1) }}
                key={element.name.length}
              >
                {isBranch && <ArrowIcon isOpen={isExpanded} />}
                {/* <CheckBoxIcon
                  className="checkbox-icon"
                  onClick={(e) => {
                    handleSelect(e);
                    e.stopPropagation();
                  }}
                  variant={
                    isHalfSelected ? "some" : isSelected ? "all" : "none"
                  }
                /> */}
                <span className="name">{element.name}</span>
              </div>
            );
          }}
        />
        
      </div>

      <div className="checkbox">
        <TreeView
          data={data2}
          aria-label="Checkbox tree"
          multiSelect
          propagateSelect
          propagateSelectUpwards
          togglableSelect
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            isSelected,
            isHalfSelected,
            getNodeProps,
            level,
            handleSelect,
            handleExpand,
          }) => {
            return (
              <div
                {...getNodeProps({ onClick: handleExpand })}
                style={{ marginLeft: 40 * (level - 1) }}
              >
                {isBranch && <ArrowIcon isOpen={isExpanded} />}
                <CheckBoxIcon
                  className="checkbox-icon"
                  onClick={(e) => {
                    handleSelect(e);
                    e.stopPropagation();
                  }}
                  variant={
                    isHalfSelected ? "some" : isSelected ? "all" : "none"
                  }
                />
                <span className="name">{element.name}</span>
                <span className="name">{element.age}</span>
              </div>
            );
          }}
        />
        
      </div>
    </div>
    // <StyledApp>
    //   <div>
    //     {dataSource.map((node,i) => {
    //       const type = node.type;
    //       const label = <span>{type}</span>;
    //       return(
    //           <TreeView key={type + '|' + i} nodeLabel = {label} defaultCollapsed = {false}>
    //            {node.people.map(person =>{
    //               const label2 = <span>{person.name}</span>;
    //               return(
    //                 <TreeView nodeLabel ={label2} key= {person.name}defaultCollapsed={false}>
    //                   <div>age : { person.age}</div>
    //                   <div>sex : {person.sex}</div>
    //                   <div>role : {person.role}</div>
    //                 </TreeView>
    //            )})}
    //           </TreeView>
    //       );
    //     })}
    //   </div>

    // </StyledApp>
  );
}
export default App;
