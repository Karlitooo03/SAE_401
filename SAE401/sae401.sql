-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 11, 2024 at 02:41 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sae401`
--

-- --------------------------------------------------------

--
-- Table structure for table `aliment`
--

CREATE TABLE `aliment` (
  `id_aliment` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aliment`
--

INSERT INTO `aliment` (`id_aliment`, `nom`, `quantite`) VALUES
(1, 'California Saumon Avocat', 0),
(2, 'Sushi Saumon', 0),
(3, 'Spring Avocat Cheese', 0),
(4, 'California pacific', 0),
(5, 'Edamame/Salade de chou', 0),
(6, 'Maki Salmon Roll', 0),
(7, 'Spring Saumon Avocat', 0),
(8, 'Maki Cheese Avocat', 0),
(9, 'California Thon Cuit Avocat', 0),
(10, 'Sando Chicken Katsu', 0),
(11, 'Sando Salmon Aburi', 0),
(12, 'Maki Salmon', 0),
(13, 'Sushi Thon', 0),
(14, 'California Thon Avocat', 0),
(15, 'California French Touch', 0),
(16, 'California French salmon', 0),
(17, 'California Yellowtail Ponzu', 0),
(18, 'Signature Dragon Roll', 0),
(19, 'Signature Rockn Roll', 0),
(20, 'Sushi Salmon', 0),
(21, 'Sushi Saumon Tsukudani', 0),
(22, 'Spring tataki Saumon', 0),
(23, 'California Crevette', 0),
(24, 'California Chicken Katsu', 0);

-- --------------------------------------------------------

--
-- Table structure for table `box`
--

CREATE TABLE `box` (
  `id_box` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `nb_piece` int(11) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `id_saveur` int(11) DEFAULT NULL,
  `id_aliment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `box`
--

INSERT INTO `box` (`id_box`, `nom`, `nb_piece`, `prix`, `id_saveur`, `id_aliment`) VALUES
(1, 'Tasty Blend', 12, '12.50', 1, 1),
(2, 'Amateur Mix', 18, '15.90', 4, 2),
(3, 'Saumon Original', 11, '12.50', 2, 3),
(4, 'Salmon Lovers', 18, '15.90', 2, 4),
(5, 'Salmon Classic', 10, '15.90', 1, 5),
(6, 'Master Mix', 12, '15.90', 1, 6),
(7, 'Sunrise', 18, '15.90', 4, 7),
(8, 'Sando Box Chicken Katsu', 13, '15.90', 4, 8),
(9, 'Sando Box Salmon Aburi', 13, '15.90', 2, 9),
(10, 'Super Salmon', 24, '19.90', 4, 10),
(11, 'California Dream', 24, '19.90', 7, 11),
(12, 'Gourmet Mix', 22, '24.50', 6, 12),
(13, 'Fresh Mix', 22, '24.50', 7, 13);

-- --------------------------------------------------------

--
-- Table structure for table `box_aliment`
--

CREATE TABLE `box_aliment` (
  `id_box` int(11) NOT NULL,
  `id_aliment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `box_aliment`
--

INSERT INTO `box_aliment` (`id_box`, `id_aliment`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(1, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(5, 5),
(6, 5),
(7, 5),
(8, 5),
(9, 5),
(10, 5),
(11, 5),
(12, 5),
(13, 5),
(2, 6),
(7, 6),
(8, 6),
(10, 6),
(13, 6),
(2, 7),
(4, 7),
(2, 8),
(7, 9),
(8, 9),
(9, 9),
(8, 10),
(9, 11),
(6, 12),
(6, 13),
(10, 14),
(10, 15),
(11, 16),
(11, 17),
(11, 18),
(12, 19),
(12, 20),
(12, 21),
(12, 22),
(13, 23),
(13, 24);

-- --------------------------------------------------------

--
-- Table structure for table `box_saveur`
--

CREATE TABLE `box_saveur` (
  `id_box` int(11) NOT NULL,
  `id_saveur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `box_saveur`
--

INSERT INTO `box_saveur` (`id_box`, `id_saveur`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(6, 2),
(7, 2),
(9, 2),
(10, 2),
(11, 2),
(1, 3),
(2, 3),
(7, 3),
(8, 3),
(13, 3),
(2, 4),
(4, 4),
(7, 4),
(8, 4),
(10, 4),
(12, 4),
(13, 4),
(8, 5),
(11, 5),
(12, 5),
(6, 6),
(9, 6),
(11, 6),
(12, 6),
(13, 6),
(11, 7),
(12, 8),
(11, 9),
(12, 9),
(13, 9);

-- --------------------------------------------------------

--
-- Table structure for table `saveur`
--

CREATE TABLE `saveur` (
  `id_saveur` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `saveur`
--

INSERT INTO `saveur` (`id_saveur`, `nom`, `quantite`) VALUES
(1, 'saumon', NULL),
(2, 'avocat', NULL),
(3, 'cheese', NULL),
(4, 'coriandre', NULL),
(5, 'viande', NULL),
(6, 'thon', NULL),
(7, 'crevette', NULL),
(8, 'seriole lalandi', NULL),
(9, 'spicy', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aliment`
--
ALTER TABLE `aliment`
  ADD PRIMARY KEY (`id_aliment`);

--
-- Indexes for table `box`
--
ALTER TABLE `box`
  ADD PRIMARY KEY (`id_box`),
  ADD KEY `id_saveur` (`id_saveur`),
  ADD KEY `id_aliment` (`id_aliment`);

--
-- Indexes for table `box_aliment`
--
ALTER TABLE `box_aliment`
  ADD PRIMARY KEY (`id_box`,`id_aliment`),
  ADD KEY `id_aliment` (`id_aliment`);

--
-- Indexes for table `box_saveur`
--
ALTER TABLE `box_saveur`
  ADD PRIMARY KEY (`id_box`,`id_saveur`),
  ADD KEY `id_saveur` (`id_saveur`);

--
-- Indexes for table `saveur`
--
ALTER TABLE `saveur`
  ADD PRIMARY KEY (`id_saveur`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aliment`
--
ALTER TABLE `aliment`
  MODIFY `id_aliment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `box`
--
ALTER TABLE `box`
  MODIFY `id_box` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `saveur`
--
ALTER TABLE `saveur`
  MODIFY `id_saveur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `box`
--
ALTER TABLE `box`
  ADD CONSTRAINT `box_ibfk_1` FOREIGN KEY (`id_saveur`) REFERENCES `saveur` (`id_saveur`),
  ADD CONSTRAINT `box_ibfk_2` FOREIGN KEY (`id_aliment`) REFERENCES `aliment` (`id_aliment`);

--
-- Constraints for table `box_aliment`
--
ALTER TABLE `box_aliment`
  ADD CONSTRAINT `box_aliment_ibfk_1` FOREIGN KEY (`id_box`) REFERENCES `box` (`id_box`),
  ADD CONSTRAINT `box_aliment_ibfk_2` FOREIGN KEY (`id_aliment`) REFERENCES `aliment` (`id_aliment`);

--
-- Constraints for table `box_saveur`
--
ALTER TABLE `box_saveur`
  ADD CONSTRAINT `box_saveur_ibfk_1` FOREIGN KEY (`id_box`) REFERENCES `box` (`id_box`),
  ADD CONSTRAINT `box_saveur_ibfk_2` FOREIGN KEY (`id_saveur`) REFERENCES `saveur` (`id_saveur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
