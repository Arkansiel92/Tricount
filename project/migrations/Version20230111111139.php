<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230111111139 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `groups` (id INT AUTO_INCREMENT NOT NULL, administrator_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, nb_person INT NOT NULL, INDEX IDX_F06D39704B09E92C (administrator_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tasks (id INT AUTO_INCREMENT NOT NULL, group_ref_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_50586597F2319979 (group_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `groups` ADD CONSTRAINT FK_F06D39704B09E92C FOREIGN KEY (administrator_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE tasks ADD CONSTRAINT FK_50586597F2319979 FOREIGN KEY (group_ref_id) REFERENCES `groups` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `groups` DROP FOREIGN KEY FK_F06D39704B09E92C');
        $this->addSql('ALTER TABLE tasks DROP FOREIGN KEY FK_50586597F2319979');
        $this->addSql('DROP TABLE `groups`');
        $this->addSql('DROP TABLE tasks');
    }
}
