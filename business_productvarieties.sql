-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 12:03 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igap_store2`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_productvarieties`
--

CREATE TABLE `business_productvarieties` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `size` varchar(50) NOT NULL,
  `color` varchar(100) NOT NULL,
  `weight` int(11) NOT NULL,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `instock` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_productvarieties`
--

INSERT INTO `business_productvarieties` (`id`, `productid`, `size`, `color`, `weight`, `mrp`, `price`, `instock`, `status`) VALUES
(2, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(3, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(4, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(5, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(6, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(7, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open'),
(8, 0, 'xxl', 'red', 5, 0, 0, 'y', 'open');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business_productvarieties`
--
ALTER TABLE `business_productvarieties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business_productvarieties`
--
ALTER TABLE `business_productvarieties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
