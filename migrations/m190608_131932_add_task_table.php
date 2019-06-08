<?php

use yii\db\Migration;

/**
 * Class m190608_131932_add_task_table
 */
class m190608_131932_add_task_table extends Migration
{
     /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
		$tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        $this->createTable('{{%task}}', [
            'id' => $this->primaryKey(),
            'procedure_id' => $this->integer()->notNull(),
            'order' => $this->integer()->notNull()
        ], $tableOptions);

        // creates index for column `procedure_id`
        $this->createIndex(
            'idx-task-procedure_id',
            '{{%task}}',
            'procedure_id'
        );

        // add foreign key for table `procedure`
        $this->addForeignKey(
            'fk-task-procedure_id',
            '{{%task}}',
            'procedure_id',
            'procedure',
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
            'fk-task-procedure_id',
            '{{%task}}'
        );
        
        // drops index for column `user_id`
        $this->dropIndex(
            'idx-task-procedure_id',
            '{{%task}}'
        );

        $this->dropTable('{{%task}}');
    }
}
