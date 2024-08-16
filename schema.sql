DROP DATABASE acme_icecreamshop_db;
CREATE DATABASE acme_icecreamshop_db;

\c acme_icecreamshop_db;

CREATE TABLE flavors(id SERIAL PRIMARY KEY,name TEXT, 
glutenfree BOOLEAN,description TEXT,imageurl TEXT);


INSERT INTO flavors(name, glutenfree, description, imageurl)
VALUES ('Zanzibar',true, 'Chocolate that tastes just like a fudge brownie', 'https://static.wixstatic.com/media/a2868a_87132e43cf5642e2aeb58af6531f3f43~mv2.jpg/v1/fill/w_980,h_1392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Icecream%20menu_2024.jpg'),
('Mint Avalanche', false, 'Minty green ice cream', 'https://static.wixstatic.com/media/a2868a_87132e43cf5642e2aeb58af6531f3f43~mv2.jpg/v1/fill/w_980,h_1392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Icecream%20menu_2024.jpg'),
('Black Cherry', true, 'Simply sweet black cherry ice cream with whole cherries', 'https://static.wixstatic.com/media/a2868a_87132e43cf5642e2aeb58af6531f3f43~mv2.jpg/v1/fill/w_980,h_1392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Icecream%20menu_2024.jpg'),
('Peanut Butter Cup', true, 'Peanut butter cups and chocolate ice cream', 'https://static.wixstatic.com/media/a2868a_87132e43cf5642e2aeb58af6531f3f43~mv2.jpg/v1/fill/w_980,h_1392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Icecream%20menu_2024.jpg'),
('Old Fashion Vanilla', true, 'Vanilla ice cream with pure Madagascar vanilla', 'https://static.wixstatic.com/media/a2868a_87132e43cf5642e2aeb58af6531f3f43~mv2.jpg/v1/fill/w_980,h_1392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Icecream%20menu_2024.jpg');


