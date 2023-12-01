import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer, Box,
} from '@chakra-ui/react';
import { formatNumberWithCommas } from '../../helpers/format.js';

// ----------------------------------------------------------------------

export default function General() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from http://localhost:8080/api/newTokens
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/newTokens');
        const result = await response.json();
        setData(result);
        //console.log(result);

        console.log(result.filter(item => item.txn_count > 600));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every minute
    const intervalId = setInterval(fetchData, 120000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box my={10}>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Liq. Holder</Th>
              <Th isNumeric>Liquidity</Th>
              <Th isNumeric>Market Cap</Th>
              <Th isNumeric>Price Change 24H</Th>
              <Th isNumeric>Volume 24H</Th>
              <Th isNumeric>Buys</Th>
              <Th isNumeric>Sells</Th>
              <Th isNumeric>TXNS</Th>
              <Th isNumeric>TXNS / Time</Th>
              <Th isNumeric>Time Difference</Th>
              <Th isNumeric>Created Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data.filter(item => item.buys_count > 100).map((item, index) =>
              <Tr key={index}>
                <Td title={item.base_token_name} color={'#00E340'} fontWeight={500}>
                  <Link to={`/dashboard/general/${item.pool_address}`} target={'_blank'}>
                    {item.base_token_symbol}
                  </Link>
                </Td>
                <Td>{item.lp_holder}</Td>
                <Td isNumeric color={item.liquidity < item.market_cap ? '#00E340':'#FF5722'}>${formatNumberWithCommas(item.liquidity)} x{parseFloat(item.market_cap / item.liquidity).toFixed(2)}</Td>
                <Td isNumeric>${formatNumberWithCommas(item.market_cap)}</Td>
                <Td isNumeric>{formatNumberWithCommas(item.price_change_percent)}%</Td>
                <Td isNumeric>${formatNumberWithCommas(item.volume)}</Td>
                <Td isNumeric>{item.buys_count}</Td>
                <Td isNumeric>{item.sells_count}</Td>
                <Td isNumeric>{item.txn_count}</Td>
                <Td isNumeric>{parseFloat(item.buys_count / parseInt(item.timeDifference)).toFixed(2)}</Td>
                <Td isNumeric color={item.timeDifference < 20 ? '#00E340' : null}>{item.timeDifference}</Td>
                <Td isNumeric>{item.createdDate}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

