export const HomeIcon = ({ active }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M8.38171 19.0503V16.239C8.3817 15.5266 8.96099 14.9478 9.67852 14.9433H12.3132C13.0339 14.9433 13.6182 15.5234 13.6182 16.239V19.0421C13.6182 19.66 14.1203 20.1622 14.7427 20.1667H16.5401C17.3796 20.1688 18.1855 19.8392 18.7799 19.2507C19.3742 18.6621 19.7083 17.8629 19.7083 17.0294V9.0437C19.7083 8.37045 19.4077 7.73183 18.8875 7.29989L12.781 2.45142C11.7136 1.60337 10.1891 1.63077 9.15323 2.51661L3.17805 7.29989C2.6333 7.7191 2.30772 8.35961 2.29163 9.0437V17.0213C2.29163 18.7584 3.71006 20.1667 5.45978 20.1667H7.21623C7.51587 20.1688 7.80399 20.0522 8.01664 19.8426C8.2293 19.633 8.34889 19.3478 8.34888 19.0503H8.38171Z"
          fill={active ? "#FACD66" : "#EFEEE0"}
          fillOpacity={active ? "1" : "0.25"}
        />
      </g>
    </svg>
  );
};
