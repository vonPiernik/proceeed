<?php

use yii\db\Migration;

/**
 * Class m190608_130533_add_procedur_table
 */
class m190608_130533_add_procedur_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
		$tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        $this->createTable('{{%procedure}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull()->unique(),
            'user_id' => $this->integer()->notNull()
        ], $tableOptions);

        // creates index for column `user_id`
        $this->createIndex(
            'idx-procedure-user_id',
            '{{%procedure}}',
            'user_id'
        );

        // add foreign key for table `user`
        $this->addForeignKey(
            'fk-procedure-user_id',
            '{{%procedure}}',
            'user_id',
            'user',
            'id',
            'CASCADE'
        );

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `user`
        $this->dropForeignKey(
            'fk-procedure-user_id',
            '{{%procedure}}'
        );
        
        // drops index for column `user_id`
        $this->dropIndex(
            'idx-procedure-user_id',
            '{{%procedure}}'
        );

        $this->dropTable('{{%procedure}}');
    }
}
