<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "task".
 *
 * @property int $id
 * @property int $procedure_id
 * @property int $order
 *
 * @property Procedure $procedure
 */
class Task extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'task';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['procedure_id', 'order'], 'required'],
            [['procedure_id', 'order', 'state', 'previous_task_id', 'previous_task_state'], 'integer'],
            [['previous_task_id'], 'exist', 'skipOnError' => true, 'targetClass' => Task::className(), 'targetAttribute' => ['previous_task_id' => 'id']],
            [['procedure_id'], 'exist', 'skipOnError' => true, 'targetClass' => Procedure::className(), 'targetAttribute' => ['procedure_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'procedure_id' => Yii::t('app', 'Procedure ID'),
            'order' => Yii::t('app', 'Order'),
            'state' => Yii::t('app', 'State'),
            'previous_task_id' => Yii::t('app', 'Previous Task ID'),
            'previous_task_state' => Yii::t('app', 'Previous Task State'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPreviousTask()
    {
        return $this->hasOne(Task::className(), ['id' => 'previous_task_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProcedure()
    {
        return $this->hasOne(Procedure::className(), ['id' => 'procedure_id']);
    }

    /**
     * {@inheritdoc}
     * @return TaskQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TaskQuery(get_called_class());
    }
}
