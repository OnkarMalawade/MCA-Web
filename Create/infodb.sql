-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2023 at 09:06 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `infotb`
--

CREATE TABLE `infotb` (
  `fname` varchar(23) NOT NULL,
  `lname` varchar(23) NOT NULL,
  `email` varchar(80) NOT NULL,
  `tel` int(20) NOT NULL,
  `dob` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `infotb`
--

INSERT INTO `infotb` (`fname`, `lname`, `email`, `tel`, `dob`) VALUES
('karishma', 'karishma', 'onkarmalawade@gmail.com', 2147483647, '2000-12-12'),
('karishma', 'karishma', 'onkarmalawade@gmail.com', 2147483647, '2000-12-12'),
('karishma', 'karishma', 'onkarmalawade@gmail.com', 2147483647, '2000-12-12'),
('karishma', 'karishma', 'onkarmalawade@gmail.com', 2147483647, '2000-12-12'),
('karishma', 'jj', 'onkarmalawade@gmail.com', 1212312121, '2000-09-01'),
('hrl', 's', 'omkarmalvade012@gmail.com', 1212312121, '2000-09-01'),
('karishma', 'gdf', 'omkarmalvade012@gmail.com', 1212312121, '2000-09-01');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
