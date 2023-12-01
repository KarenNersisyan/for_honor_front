import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { formatNumberWithCommas } from '../../helpers/format.js';

// ----------------------------------------------------------------------

export default function GeneralSingle() {
  const { id } = useParams();
  const [tokenDetails, setTokenDetails] = useState(null);

  useEffect(() => {
    // Function to fetch data from http://localhost:8080/api/newTokens/{id}
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/newTokens/${id}`);
        const result = await response.json();
        setTokenDetails(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();
  }, [id]);

  if (!tokenDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
                <Th isNumeric>Time Difference</Th>
                <Th isNumeric>Created Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td title={tokenDetails.base_token_name} color={'#00E340'} fontWeight={500}>
                  <Link to={`/dashboard/general/${tokenDetails.pool_address}`} target={'_blank'}>
                    {tokenDetails.base_token_symbol}
                  </Link>
                </Td>
                <Td>{tokenDetails.lp_holder}</Td>
                <Td isNumeric color={tokenDetails.liquidity < tokenDetails.market_cap ? '#00E340':'#FF5722'}>${formatNumberWithCommas(tokenDetails.liquidity)} x{parseFloat(tokenDetails.market_cap / tokenDetails.liquidity).toFixed(2)}</Td>
                <Td isNumeric>${formatNumberWithCommas(tokenDetails.market_cap)}</Td>
                <Td isNumeric>{formatNumberWithCommas(tokenDetails.price_change_percent)}%</Td>
                <Td isNumeric>${formatNumberWithCommas(tokenDetails.volume)}</Td>
                <Td isNumeric>{tokenDetails.buys_count}</Td>
                <Td isNumeric>{tokenDetails.sells_count}</Td>
                <Td isNumeric>{tokenDetails.txn_count}</Td>
                <Td isNumeric color={tokenDetails.timeDifference < 20 ? '#00E340' : null}>{tokenDetails.timeDifference}</Td>
                <Td isNumeric>{tokenDetails.createdDate}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <div id="dexscreener-embed">
        <iframe src={`https://dexscreener.com/ethereum/${id}?embed=1&theme=dark`}/>
      </div>
    </div>
  );
}
