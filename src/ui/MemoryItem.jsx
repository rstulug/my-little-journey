function MemoryItem({ memory }) {
  console.log(memory);
  return (
    <li className="dark:border-gray-500">
      <div>{memory.title}</div>
    </li>
  );
}

export default MemoryItem;
