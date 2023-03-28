import type { TabsProps } from 'antd';
import { Button, DatePicker, Form, Steps, Table, Tabs, TimePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Project Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  //   render: () => <a>action</a>,
  // },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Shawn ${i}`,
    age: 32,
    address: `Dallas no. ${i}`,
  });
}

function DataTable() {
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
    </div>
  );
}

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const config = {
  rules: [
    { type: 'object' as const, required: true, message: 'Please select time!' },
  ],
};

const rangeConfig = {
  rules: [
    { type: 'array' as const, required: true, message: 'Please select time!' },
  ],
};

const onFinish = (fieldsValue: any) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const rangeTimeValue = fieldsValue['range-time-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format(
      'YYYY-MM-DD HH:mm:ss'
    ),
    'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    'range-picker': [
      rangeValue[0].format('YYYY-MM-DD'),
      rangeValue[1].format('YYYY-MM-DD'),
    ],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  };
  console.log('Received values of form: ', values);
};

function DataForm() {
  return (
    <Form
      name="time_related_controls"
      {...formItemLayout}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="date-time-picker"
        label="DatePicker[showTime]"
        {...config}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name="month-picker" label="MonthPicker" {...config}>
        <DatePicker picker="month" />
      </Form.Item>
      <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        name="range-time-picker"
        label="RangePicker[showTime]"
        {...rangeConfig}
      >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item name="time-picker" label="TimePicker" {...config}>
        <TimePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function StepsBlock() {
  const [current, setCurrent] = useState(1);
  const items = [
    {
      title: 'Finished',
      description: 'desciption',
    },
    {
      title: 'In Progress',
      description: 'desciption',
      subTitle: 'Left 00:00:08',
    },
    {
      title: 'Waiting',
      description: 'desciption',
    },
  ];
  const goNext = () => {
    setCurrent((current + 1) % items.length);
  };
  return (
    <div>
      <Steps items={items} current={current} />
      <Button onClick={() => goNext()}>Next Step</Button>
    </div>
  );
}

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `DataTable`,
    children: <DataTable />,
  },
  {
    key: '2',
    label: `Form`,
    children: <DataForm />,
  },
  {
    key: '3',
    label: `Steps`,
    children: <StepsBlock />,
  },
];

function Home() {
  return (
    <div className="pt-[12px] pb-[12px] pl-[24px] pr-[24px]">
      <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Home;



// function Content(){
//   return <div>
//       <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/profile" element={<Profile />} />
//        <Route path="/utility" element={<Utility />} />
//        <Route path="*" element={<NotFound />} />
//      </Routes>
//    </div>
// }
// const menuitems = [
//   {lable: "Home", key:"/"},
//   {lable: "Profile", key :"/profile"},
//   {lable: "Utility", key: "/utility"}
// ]

// return (
//   <div style={{display:"flex",flexDirection:"row"}}>
//     <Menu mode="vertical">
//       onClick={
//         ({key})=>{
          
//         }
//       }
//       {menuitems.map((item, index) => (
//         <Menu.Item key={index}>
//           {item.lable}
//         </Menu.Item>
//       ))}
//     </Menu>
//     <Content></Content>
//   </div>
  

// );


